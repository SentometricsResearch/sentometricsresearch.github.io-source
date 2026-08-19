---
date: "2021-02-02"
summary: Monthly economic policy uncertainty for Quebec, built from French-Canadian newspaper archives. A century of data.
title: EPU Quebec
aliases:
- /post/2102-epu-quebec/
---

{{< index-chart data="epu-quebec" caption="Monthly, from 1913. The three tallest peaks are the Great Depression, the 2008 crisis and the COVID-19 pandemic." >}}
## What it measures

Economic policy uncertainty — the economic risk that comes from not knowing the future path of
government policy — measured from **French-Canadian** sources, which were the missing component of
the existing Canadian EPU index.

Historical archives break the standard EPU recipe: issues are often digitised as whole editions
rather than individual articles, and source availability shifts across the century. The index uses a
token-distance-based triple detection and a dynamic normalisation across sources to handle both.
Three peaks dominate the century: the Great Depression, the 2008 financial crisis, and the COVID-19
pandemic.

Built with archives from Bibliothèque et Archives nationales du Québec and a research collaboration
with Radio-Canada. See
[A century of economic policy uncertainty through the French-Canadian lens](https://sentometrics-research.com/publication/epu-quebec/).

## Coverage

| | |
|---|---|
| **Frequency** | Monthly |
| **Period** | 1913 – 2020 |
| **Region** | Quebec, Canada |
| **Sources** | French-Canadian newspaper archives |
| **Format** | `.csv` |

<!-- TODO équipe : ajouter la liste des colonnes du CSV (nom, définition, unité). -->

## How to cite

Ardia, D., Bluteau, K., Kassem, A. (2021). **A century of economic policy uncertainty through the
French-Canadian lens**. *Economics Letters*, 205, 109938.
[doi:10.1016/j.econlet.2021.109938](https://doi.org/10.1016/j.econlet.2021.109938)

BibTeX is on the [How to cite](https://sentometrics-research.com/cite/) page.

## Terms

Free for academic research. By downloading you agree to cite the reference above, to place
`https://sentometrics-research.com` in a footnote so others can find the data, and to assume all
risk associated with its use.

### Download

- [`epu-quebec-monthly.csv.gz`](https://sentometrics-research.com/data/epu-quebec/epu-quebec-monthly.csv.gz) — monthly

Gzipped CSV, one header row, ISO 8601 dates. No decompression step needed:

```r
read.csv(gzfile(url("https://sentometrics-research.com/data/epu-quebec/epu-quebec-monthly.csv.gz")))
```

See the [folder README](https://sentometrics-research.com/data/epu-quebec/README.md) for every column, and
[what differs](https://sentometrics-research.com/data/README.md) from the archived original.

**Original as published** — the file this is derived from, byte for byte:
[`Sentometrics_EPU_QUEBEC.csv`](https://www.dropbox.com/s/37vl8pagi2ztoah/Sentometrics_EPU_QUEBEC.csv?dl=1). It will move to a Zenodo deposit with a citable DOI.

[Full licence](https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0)

<!-- schema.org/Dataset markup, so the index is discoverable in Google Dataset
     Search rather than only through the paper. Goldmark passes raw HTML through
     (unsafe = true); JSON-LD is valid anywhere in the document. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "Economic Policy Uncertainty Index for Quebec",
  "description": "Monthly economic policy uncertainty index for the Canadian province of Quebec, built from French-Canadian newspaper archives and spanning a century. Uses a token-distance-based triple detection and a dynamic normalisation across sources to handle historical archives digitised by edition rather than by article.",
  "url": "https://sentometrics-research.com/download/epu-quebec/",
  "sameAs": "https://doi.org/10.1016/j.econlet.2021.109938",
  "license": "https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0",
  "isAccessibleForFree": true,
  "keywords": [
    "economic policy uncertainty",
    "textual analysis",
    "newspaper archives",
    "Quebec",
    "macroeconomics"
  ],
  "temporalCoverage": "1913/2020",
  "spatialCoverage": {
    "@type": "Place",
    "name": "Quebec, Canada"
  },
  "creator": {
    "@type": "Organization",
    "name": "Sentometrics Research",
    "url": "https://sentometrics-research.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sentometrics Research",
    "url": "https://sentometrics-research.com"
  },
  "citation": "Ardia, D., Bluteau, K., Kassem, A. (2021). A century of economic policy uncertainty through the French-Canadian lens. Economics Letters, 205, 109938.",
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "Sentometrics Research",
    "url": "https://sentometrics-research.com"
  },
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "application/gzip",
      "contentUrl": "https://sentometrics-research.com/data/epu-quebec/epu-quebec-monthly.csv.gz"
    }
  ]
}
</script>
