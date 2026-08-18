---
title: "LLMs and sentometrics"
summary: "What changes when the lexicon is replaced by a generative model — and what does not."
draft: true
---

> **Draft — not published.** This page is a skeleton with the argument structure and our own
> references in place. The substance needs to be written by the team before `draft: false`.

## The question

Sentometrics was built in the dictionary era. Sentiment was a count, weighted by a word list, and
almost every methodological difficulty in the [survey](https://sentometrics-research.com/publication/econometrics-meets-sentiment/)
followed from how crude that measurement was. Large language models remove that crudeness. The
question this page should answer is what that actually changes.

## What changes

*To write. Suggested structure:*

- Measurement quality: context, negation, irony, and the domain-specificity that motivated the
  Loughran–McDonald word lists.
- The disappearance of the lexicon-choice problem — and what replaces it (prompt, model version,
  temperature, refusal behaviour).
- Cost and reproducibility: a lexicon is deterministic and free; a hosted model is neither.
- Look-ahead bias: a model trained on data through year *T* scoring documents from year *T−5*.

## What does not change

*To write. The argument the team is best placed to make:*

- **Aggregation is still unsolved.** Better document-level sentiment does not tell you how to pool
  it across documents and time. This is the core problem
  [sentometrics](https://sentometrics-research.com/publication/sentometrics-r-package/) was written to address, and
  [optimal text-based indices](https://sentometrics-research.com/publication/optimal-text-based-indices/) is its most recent answer.
- **Text selection still dominates.** Which sources enter the corpus moves an index more than the
  scoring method does.
- **Identification is still identification.** A better sentiment measure does not turn a correlation
  into a causal claim.

## Where we stand

*To write.* Our current position, and the link to
[FAME](https://fame-ai.org), the joint Paris Dauphine–PSL and HEC Montréal project on generative AI
and large language models in financial markets.
