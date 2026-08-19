---
date: "2020-11-14"
summary: Daily sentiment indices for topics relevant to the U.S. economy, computed with several lexicon-based methods. January 1994 to December 2017.
title: U.S. Topical Economic Sentiment
aliases:
- /post/2009-questioning-the-news/
---

{{< index-chart data="us-econ" caption="Monthly mean across the 44 topics, one series per lexicon. The lexicons do not share a scale — compare shapes, not levels." >}}
## What it measures

Daily sentiment for a range of topics relevant to the U.S. economy, computed from a large news
corpus using several lexicon-based methods. The indices are the empirical output of
[Questioning the news about economic growth](https://sentometrics-research.com/publication/questioning-the-news/)
(*International Journal of Forecasting*), which proposes generating thousands of candidate
sentiment indices and letting a sparse regression select the ones that forecast — the methodology
that became the [sentometrics](https://sentometrics-research.com/publication/sentometrics-r-package/) R package.

Winner of the *International Journal of Forecasting* best paper award 2018–2019.

## Coverage

| | |
|---|---|
| **Frequency** | Daily |
| **Period** | 2 January 1994 – 31 December 2017 |
| **Region** | United States |
| **Series** | One value per date, lexicon and topic — long format, 1.37 million rows |
| **Format** | `.csv` |

Dates missing from the file mean no news articles were available for that date.

<!-- TODO équipe : ajouter la liste des colonnes du CSV (nom, définition, unité). -->

## How to cite

Ardia, D., Bluteau, K., Boudt, K. (2019). **Questioning the news about economic growth: Sparse
forecasting using thousands of news-based sentiment values**. *International Journal of
Forecasting*, 35, 1370–1386.
[doi:10.1016/j.ijforecast.2018.10.010](https://doi.org/10.1016/j.ijforecast.2018.10.010)

BibTeX is on the [How to cite](https://sentometrics-research.com/cite/) page.

## Terms

Free for academic research. By downloading you agree to cite the reference above, to place
`https://sentometrics-research.com` in a footnote so others can find the data, and to assume all
risk associated with its use.

### Download

- [`us-topical-economic-sentiment.csv.gz`](https://sentometrics-research.com/data/us-econ/us-topical-economic-sentiment.csv.gz) — daily, long format

Gzipped CSV, one header row, ISO 8601 dates. No decompression step needed:

```r
read.csv(gzfile(url("https://sentometrics-research.com/data/us-econ/us-topical-economic-sentiment.csv.gz")))
```

See the [folder README](https://sentometrics-research.com/data/us-econ/README.md) for every column, and
[what differs](https://sentometrics-research.com/data/README.md) from the archived original.

**Original as published** — the file this is derived from, byte for byte:
[`Sentometrics_US_Topical_Economic_Sentiment.csv`](https://www.dropbox.com/s/9rdmbtdkgqg9uqt/Sentometrics_US_Topical_Economic_Sentiment.csv?dl=1). It will move to a Zenodo deposit with a citable DOI.

[Full licence](https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0)

<!-- schema.org/Dataset markup, so the index is discoverable in Google Dataset
     Search rather than only through the paper. Goldmark passes raw HTML through
     (unsafe = true); JSON-LD is valid anywhere in the document. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "U.S. Topical Economic Sentiment Indices",
  "description": "Daily sentiment indices for topics relevant to the U.S. economy, computed from a large news corpus with several lexicon-based methods. The empirical output of a sparse forecasting approach that generates thousands of candidate sentiment indices and selects those that forecast.",
  "url": "https://sentometrics-research.com/download/us-econ/",
  "sameAs": "https://doi.org/10.1016/j.ijforecast.2018.10.010",
  "license": "https://www.dropbox.com/s/jwjh4b08zvq09nv/LICENSE.txt?dl=0",
  "isAccessibleForFree": true,
  "keywords": [
    "textual sentiment",
    "news",
    "economic growth",
    "forecasting",
    "United States"
  ],
  "temporalCoverage": "1994-01-02/2017-12-31",
  "spatialCoverage": {
    "@type": "Place",
    "name": "United States"
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
  "citation": "Ardia, D., Bluteau, K., Boudt, K. (2019). Questioning the news about economic growth: Sparse forecasting using thousands of news-based sentiment values. International Journal of Forecasting, 35(4), 1370–1386.",
  "includedInDataCatalog": {
    "@type": "DataCatalog",
    "name": "Sentometrics Research",
    "url": "https://sentometrics-research.com"
  },
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "application/gzip",
      "contentUrl": "https://sentometrics-research.com/data/us-econ/us-topical-economic-sentiment.csv.gz"
    }
  ]
}
</script>
