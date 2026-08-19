# Sentometrics indices

Four indices published by [Sentometrics Research](https://sentometrics-research.com), in a form
meant to be read by a program.

| index | files | coverage | maintained |
|---|---|---|---|
| [MCCC](mccc/) | 9 — one per vintage and frequency | daily and monthly, 2003-01 → 2025-06 | yes, annually |
| [EPU Quebec](epu-quebec/) | 1 | monthly, 1913-01 → 2020-06 | no |
| [EPU Belgium](epu-belgium/) | 1 | daily, 2000-01-03 → 2022-06-22 | **no — the series ends mid-2022** |
| [US topical economic sentiment](us-econ/) | 1 | daily, 1994-01-02 → 2017-12-31 | no |

Every file is a gzipped CSV with a header row and ISO 8601 dates. They open directly, no
decompression step:

```r
read.csv(gzfile("mccc/mccc-2025-update-daily.csv.gz"))
```
```python
pandas.read_csv("mccc/mccc-2025-update-daily.csv.gz")
```

Straight from this repository:

```r
url <- "https://raw.githubusercontent.com/SentometricsResearch/sentometrics-indices/main/mccc/mccc-2025-update-daily.csv.gz"
read.csv(gzfile(url))
```

Each folder carries a `README.md` with the citation to use, the coverage, the meaning of every
column, and what differs from the archived original.

## Citing

Cite **the paper** for the method and **the Zenodo DOI** for the data itself. Each release of
this repository is archived on Zenodo, which mints a DOI for that exact state — so a paper can
name the vintage it used and a reader can retrieve precisely those bytes.

The paper to cite is given in each index folder.

## What is here, and what is archived

This repository holds the **working copies**: compressed, uniform, and free of the quirks that
make the originals awkward to load.

The **originals as published** — a ten-sheet `.xlsx` workbook and three source CSVs, 120 MB —
are deposited on Zenodo. They are the record: byte-for-byte what was released.

Nothing about the values differs between the two. Three things about their packaging do:

- The **`Note` column is gone.** It carried the citation on six rows and was empty on the other
  1.37 million. It is in each folder's `README.md` instead.
- The **unnamed row-number column is gone**, along with the citation and licence rows that sat
  above the header of every MCCC sheet.
- **EPU Belgium is a standard CSV now.** The original is semicolon-separated with a comma as
  decimal mark, which most default readers get wrong. The values are identical.

## Updating

The MCCC is extended once a year. The routine:

1. Refresh the originals under `indices-data/raw/`.
2. Run `python3 make_distribution.py` — it rewrites only the `.csv.gz` files.
3. Commit. Files whose data did not change produce identical bytes, so the diff shows only what
   actually moved.
4. Tag a release. Zenodo archives it and returns a DOI for that vintage.

## Licence

Free for academic research. Cite the reference given in each folder, and put
`https://sentometrics-research.com` in a footnote so others can find the data. You assume all
risk associated with its use. See `LICENCE.txt`.
