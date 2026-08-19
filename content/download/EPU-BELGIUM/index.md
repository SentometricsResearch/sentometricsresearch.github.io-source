---
date: "2021-11-23"
summary: Daily economic policy uncertainty for Flanders, Wallonia and Belgium, built separately from French- and Dutch-language sources. January 2000 to June 2022.
title: EPU Belgium
aliases:
- /post/2009-epu-index/
- /post/2111-epu-belgium-update/
---

{{< index-chart data="epu-belgium" caption="Monthly averages of the smoothed daily series, Belgium and its Dutch-language component. The series ends in June 2022." >}}
## What it measures

Economic policy uncertainty for Belgium, derived daily from major Belgian newspapers in French and
Dutch. The construction detects articles containing triplets of words — one about the economy, one
about policy, one about uncertainty — with the keyword sets defined by a combination of expert
judgment and NLP. Three series are provided: Flanders, Wallonia, and Belgium as a whole. A 30-day
moving average of the daily index is the series most commonly used.

A **November 2021 revision** made the index more local to Belgium — and so less driven by
international events with no Belgian impact — and handled several specificities of Dutch. The
French- and Dutch-language indices are more closely aligned as a result.

## Coverage

| | |
|---|---|
| **Frequency** | Daily |
| **Period** | 3 January 2000 – 22 June 2022 |
| **Region** | Flanders, Wallonia, Belgium |
| **Sources** | Major Belgian newspapers, French and Dutch language |
| **Series** | Belgium, Dutch-language and French-language, each daily and smoothed |
| **Format** | `.csv`, semicolon-separated, comma as decimal mark |

The series is **not currently maintained**: it ends on 22 June 2022. Earlier descriptions of this
index said it was updated daily, which has not been the case since then.

<!-- TODO équipe : ajouter la liste des colonnes du CSV (nom, définition, unité). -->

## How to cite

Algaba, A., Borms, S., Boudt, K., Van Pelt, J. (2020). **The economic policy uncertainty index for
Flanders, Wallonia and Belgium**. *Bank- en Financiewezen* 2020/6.
[Article](https://www.financialforum.be/nl/articles/economic-policy-uncertainty-index-flanders-wallonia-and-belgium) ·
[Preprint](https://doi.org/10.2139/ssrn.3580000)

BibTeX is on the [How to cite](https://sentometrics-research.com/cite/) page.

## Terms

Free for academic research. By downloading you agree to cite the reference above, to place
`https://sentometrics-research.com` in a footnote so others can find the data, and to assume all
risk associated with its use.

### Download

- [`epu-belgium-daily.csv.gz`](https://sentometrics-research.com/data/epu-belgium/epu-belgium-daily.csv.gz) — daily

Gzipped CSV, one header row, ISO 8601 dates. No decompression step needed:

```r
read.csv(gzfile(url("https://sentometrics-research.com/data/epu-belgium/epu-belgium-daily.csv.gz")))
```

See the [folder README](https://sentometrics-research.com/data/epu-belgium/README.md) for every column, and
[what differs](https://sentometrics-research.com/data/README.md) from the archived original.

**Original as published** — the file this is derived from, byte for byte:
[`Sentometrics_Belgium_EPU.csv`](https://www.dropbox.com/s/aftvxm26sa020hf/Sentometrics_Belgium_EPU.csv?dl=1). It will move to a Zenodo deposit with a citable DOI.

[Full licence](https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0)

<!-- schema.org/Dataset markup, so the index is discoverable in Google Dataset
     Search rather than only through the paper. Goldmark passes raw HTML through
     (unsafe = true); JSON-LD is valid anywhere in the document. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "Economic Policy Uncertainty Index for Flanders, Wallonia and Belgium",
  "description": "Daily economic policy uncertainty indices for Flanders, Wallonia and Belgium as a whole, derived from major Belgian newspapers in French and Dutch. Articles are detected through triplets of economy, policy and uncertainty terms defined by expert judgment and NLP.",
  "url": "https://sentometrics-research.com/download/epu-belgium/",
  "sameAs": "https://doi.org/10.2139/ssrn.3580000",
  "license": "https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0",
  "isAccessibleForFree": true,
  "keywords": [
    "economic policy uncertainty",
    "textual analysis",
    "Belgium",
    "Flanders",
    "Wallonia",
    "multilingual"
  ],
  "temporalCoverage": "2000-01-03/2022-06-22",
  "spatialCoverage": {
    "@type": "Place",
    "name": "Belgium"
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
  "citation": "Algaba, A., Borms, S., Boudt, K., Van Pelt, J. (2020). The economic policy uncertainty index for Flanders, Wallonia and Belgium. Bank- en Financiewezen, 2020/6.",
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "Sentometrics Research",
    "url": "https://sentometrics-research.com"
  },
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "application/gzip",
      "contentUrl": "https://sentometrics-research.com/data/epu-belgium/epu-belgium-daily.csv.gz"
    }
  ]
}
</script>
