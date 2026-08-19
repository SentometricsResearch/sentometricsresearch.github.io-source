/* Interactive chart for the published indices.
 *
 * No dependency: the site previously shipped Highcharts, Plotly, jQuery and
 * crosstalk — 11.4 MB — for a widget that had stopped working. This is ~6 KB and
 * draws to a canvas.
 *
 * Reads a plain CSV whose first column is a date and whose remaining columns are
 * series. GitHub Pages gzips it on the wire, so no decompression here.
 */
(function () {
  "use strict";

  var PALETTE = ["#6b2880", "#1c7ed6", "#c2255c", "#2b8a3e", "#e8590c", "#5f3dc4", "#0b7285"];

  function parseCSV(text) {
    var lines = text.trim().split(/\r?\n/);
    var head = lines[0].split(",");
    var rows = [];
    for (var i = 1; i < lines.length; i++) {
      var c = lines[i].split(",");
      var t = Date.parse(c[0]);
      if (isNaN(t)) continue;
      var vals = [];
      for (var j = 1; j < head.length; j++) {
        var v = parseFloat(c[j]);
        vals.push(isNaN(v) ? null : v);
      }
      rows.push({ t: t, v: vals });
    }
    return { names: head.slice(1), rows: rows };
  }

  function colours() {
    var dark = document.body.classList.contains("dark");
    return {
      axis: dark ? "#8a8f98" : "#868e96",
      grid: dark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.07)",
      text: dark ? "#c8ccd2" : "#495057",
      crosshair: dark ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.28)"
    };
  }

  function fmtDate(t) {
    var d = new Date(t);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", timeZone: "UTC" });
  }

  function Chart(el, data) {
    var self = this;
    this.el = el;
    this.data = data;
    this.series = 0;
    this.hover = null;
    // "ambient": the line alone, no axes, no tooltip, no selector. Used in the
    // hero, where the series is texture rather than something to interrogate.
    this.ambient = el.getAttribute("data-mode") === "ambient";

    if (!this.ambient && data.names.length > 1) {
      var sel = document.createElement("select");
      sel.className = "index-chart-select form-control form-control-sm";
      sel.setAttribute("aria-label", "Series to display");
      data.names.forEach(function (n, i) {
        var o = document.createElement("option");
        o.value = i; o.textContent = n;
        sel.appendChild(o);
      });
      sel.addEventListener("change", function () {
        self.series = parseInt(sel.value, 10);
        self.draw();
      });
      el.appendChild(sel);
    }

    this.canvas = document.createElement("canvas");
    this.canvas.className = "index-chart-canvas";
    el.appendChild(this.canvas);

    this.tip = document.createElement("div");
    this.tip.className = "index-chart-tip";
    this.tip.hidden = true;
    el.appendChild(this.tip);

    if (!this.ambient) {
      this.canvas.addEventListener("mousemove", function (e) { self.onMove(e); });
      this.canvas.addEventListener("mouseleave", function () {
        self.hover = null; self.tip.hidden = true; self.draw();
      });
    }

    if (window.ResizeObserver) new ResizeObserver(function () { self.draw(); }).observe(el);
    else window.addEventListener("resize", function () { self.draw(); });

    // follow the theme's day/night toggle, which sets `dark` on <body>
    new MutationObserver(function () { self.draw(); })
      .observe(document.body, { attributes: true, attributeFilter: ["class"] });

    this.draw();
  }

  Chart.prototype.geom = function () {
    var w = this.el.clientWidth || 600;
    if (this.ambient) {
      return { w: w, h: this.el.clientHeight || 150, pad: { l: 0, r: 0, t: 4, b: 0 } };
    }
    var h = Math.max(180, Math.min(340, Math.round(w * 0.38)));
    return { w: w, h: h, pad: { l: 46, r: 10, t: 12, b: 26 } };
  };

  Chart.prototype.scales = function (g) {
    var rows = this.data.rows, s = this.series;
    var lo = Infinity, hi = -Infinity;
    for (var i = 0; i < rows.length; i++) {
      var v = rows[i].v[s];
      if (v === null) continue;
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
    if (lo === Infinity) { lo = 0; hi = 1; }
    if (lo === hi) { lo -= 1; hi += 1; }
    var padY = (hi - lo) * 0.08;
    lo -= padY; hi += padY;
    var t0 = rows[0].t, t1 = rows[rows.length - 1].t;
    var iw = g.w - g.pad.l - g.pad.r, ih = g.h - g.pad.t - g.pad.b;
    return {
      lo: lo, hi: hi, t0: t0, t1: t1,
      x: function (t) { return g.pad.l + (t - t0) / (t1 - t0) * iw; },
      y: function (v) { return g.pad.t + (hi - v) / (hi - lo) * ih; }
    };
  };

  Chart.prototype.draw = function () {
    var g = this.geom(), sc = this.scales(g), c = colours();
    var dpr = window.devicePixelRatio || 1;
    var cv = this.canvas, ctx = cv.getContext("2d");
    cv.width = g.w * dpr; cv.height = g.h * dpr;
    cv.style.width = g.w + "px"; cv.style.height = g.h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, g.w, g.h);

    // horizontal grid and value labels
    if (this.ambient) { this.drawSeries(ctx, g, sc, "#ffffff", 0.55, 0.14); return; }
    ctx.font = "11px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = c.text;
    ctx.strokeStyle = c.grid;
    ctx.lineWidth = 1;
    for (var k = 0; k <= 4; k++) {
      var v = sc.lo + (sc.hi - sc.lo) * k / 4, y = Math.round(sc.y(v)) + 0.5;
      ctx.beginPath(); ctx.moveTo(g.pad.l, y); ctx.lineTo(g.w - g.pad.r, y); ctx.stroke();
      ctx.textAlign = "right"; ctx.textBaseline = "middle";
      ctx.fillText(v.toFixed(Math.abs(sc.hi - sc.lo) < 5 ? 2 : 0), g.pad.l - 6, y);
    }

    // year labels, thinned to fit
    var y0 = new Date(sc.t0).getUTCFullYear(), y1 = new Date(sc.t1).getUTCFullYear();
    var step = Math.max(1, Math.ceil((y1 - y0) / Math.max(2, Math.floor(g.w / 90))));
    ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (var yr = Math.ceil(y0 / step) * step; yr <= y1; yr += step) {
      var t = Date.UTC(yr, 0, 1);
      if (t < sc.t0 || t > sc.t1) continue;
      ctx.fillText(String(yr), sc.x(t), g.h - g.pad.b + 6);
    }

    this.drawSeries(ctx, g, sc, PALETTE[this.series % PALETTE.length], 1, 0.08);

    if (this.hover !== null) {
      var rr = this.data.rows[this.hover];
      if (rr && rr.v[this.series] !== null) {
        var hx = sc.x(rr.t), hy = sc.y(rr.v[this.series]), c2 = colours();
        ctx.strokeStyle = c2.crosshair; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(hx, g.pad.t); ctx.lineTo(hx, g.h - g.pad.b); ctx.stroke();
        ctx.beginPath(); ctx.arc(hx, hy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = PALETTE[this.series % PALETTE.length]; ctx.fill();
      }
    }
  };

  Chart.prototype.drawSeries = function (ctx, g, sc, col, alpha, fillAlpha) {
    var rows = this.data.rows, s = this.series;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    var started = false;
    for (var i = 0; i < rows.length; i++) {
      var val = rows[i].v[s];
      if (val === null) { started = false; continue; }
      var X = sc.x(rows[i].t), Y = sc.y(val);
      if (!started) { ctx.moveTo(X, Y); started = true; } else ctx.lineTo(X, Y);
    }
    ctx.strokeStyle = col; ctx.lineWidth = 1.6;
    ctx.lineJoin = "round"; ctx.lineCap = "round";
    ctx.stroke();

    // area under the curve
    ctx.lineTo(sc.x(rows[rows.length - 1].t), g.h - g.pad.b);
    ctx.lineTo(sc.x(rows[0].t), g.h - g.pad.b);
    ctx.closePath();
    ctx.globalAlpha = fillAlpha; ctx.fillStyle = col; ctx.fill();
    ctx.globalAlpha = 1;
  };

  Chart.prototype.onMove = function (e) {
    var g = this.geom(), sc = this.scales(g);
    var rect = this.canvas.getBoundingClientRect();
    var mx = e.clientX - rect.left;
    var rows = this.data.rows, best = 0, bd = Infinity;
    for (var i = 0; i < rows.length; i++) {
      var d = Math.abs(sc.x(rows[i].t) - mx);
      if (d < bd) { bd = d; best = i; }
    }
    this.hover = best;
    var r = rows[best], v = r.v[this.series];
    if (v === null) { this.tip.hidden = true; this.draw(); return; }
    this.tip.hidden = false;
    this.tip.innerHTML = '<span class="d">' + fmtDate(r.t) + '</span>' +
                         '<span class="v">' + v.toFixed(3) + '</span>';
    var left = Math.min(Math.max(sc.x(r.t) - 40, 0), g.w - 96);
    this.tip.style.left = left + "px";
    this.tip.style.top = "0px";
    this.draw();
  };

  function init(el) {
    var src = el.getAttribute("data-src");
    if (!src) return;
    fetch(src).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) {
      var d = parseCSV(t);
      if (!d.rows.length) throw new Error("empty");
      el.textContent = "";
      new Chart(el, d);
    }).catch(function () {
      // the page still carries the download links and the static sparkline
      el.innerHTML = '<p class="index-chart-fail">The interactive chart could not load. ' +
                     'The data is available from the links below.</p>';
    });
  }

  function boot() {
    var els = document.querySelectorAll(".index-chart");
    for (var i = 0; i < els.length; i++) init(els[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
