---
date: "2020-11-14"
summary: Daily sentiment indices for topics relevant to the U.S. economy, computed with several lexicon-based methods.
title: U.S. Topical Economic Sentiment
aliases:
- /post/2009-questioning-the-news/
---

## What it measures

Daily sentiment for a range of topics relevant to the U.S. economy, computed from a large news
corpus using several lexicon-based methods. The indices are the empirical output of
[Questioning the news about economic growth](https://sentometrics-research.com/publication/questioning-the-news/)
(*International Journal of Forecasting*), which proposes generating thousands of candidate
sentiment indices and letting a sparse regression select the ones that forecast — the methodology
that became the [sentometrics](https://sentometrics-research.com/publication/sentometrics-r-package/) R package.

Winner of the *International Journal of Forecasting* best paper award 2018–2019.

## Coverage

<!-- TODO équipe : la couverture affichée ici (1996) contredit le billet de blog d'origine,
     qui indique « from 1993 to 2016 ». À trancher. -->

| | |
|---|---|
| **Frequency** | Daily |
| **Period** | 1996 – 2016 |
| **Region** | United States |
| **Series** | One per economic topic, several sentiment methods each |
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

[**Download the data**](https://www.dropbox.com/s/9rdmbtdkgqg9uqt/Sentometrics_US_Topical_Economic_Sentiment.csv?dl=1) ·
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
  "temporalCoverage": "1996/2016",
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
      "encodingFormat": "text/csv",
      "contentUrl": "https://www.dropbox.com/s/9rdmbtdkgqg9uqt/Sentometrics_US_Topical_Economic_Sentiment.csv?dl=1"
    }
  ]
}
</script>
