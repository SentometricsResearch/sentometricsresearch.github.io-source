# sentometrics-research.com

Source for the [Sentometrics Research](https://sentometrics-research.com) hub —
the indices, packages, papers, people and transfer material produced by the team.

Plain **Hugo** with the Academic theme (vendored in `themes/academic`). No R, no
build script, no package restore: one binary and a content folder.

## Build locally

Hugo **0.75.0 extended** is required — the theme compiles SCSS, and later Hugo
releases are not compatible with this version of Academic.

```sh
hugo server        # preview at http://localhost:1313
hugo               # build into public/
```

On Apple Silicon there is no ARM64 build of Hugo 0.75.0; the x86_64 build runs
under Rosetta.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and pushes `public/` to
[SentometricsResearch/sentometricsresearch.github.io](https://github.com/SentometricsResearch/sentometricsresearch.github.io),
served at the domain in `CNAME`.

## Where things live

| | |
|---|---|
| `content/home/` | the one-page homepage, one file per section (`weight` sets the order) |
| `content/download/` | the indices |
| `content/publication/` | the team's papers |
| `content/software/` | the packages |
| `content/authors/` | team profiles (`avatar.jpg` per person) |
| `content/post/` | blog posts |
| `content/cite.md`, `join.md` | how to cite, how to work with us |
| `assets/scss/custom.scss` | theme overrides |
| `archive/` | the retired field bibliography, not part of the build |
