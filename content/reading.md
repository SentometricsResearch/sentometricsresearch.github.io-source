---
title: Essential readings
summary: "A short, opinionated entry point to sentometrics — around thirty papers, each with a line on why it matters."
---

This is **not** a bibliography of the field. Google Scholar, OpenAlex and Connected Papers do
exhaustiveness better than any hand-maintained list can, and a list that falls behind misleads
more than it helps.

What a search engine cannot give you is a judgment about what to read first. So this page is a
canon: the papers a newcomer to sentometrics should know, grouped by the question they answer,
each with one line on why it earns its place. It changes once or twice a year.

For our own work, see [Our work](https://sentometrics-research.com/#research). For a full treatment of the methodology, start with
the [survey](https://sentometrics-research.com/publication/econometrics-meets-sentiment/).

## Foundations — can text move markets?

- [Giving Content to Investor Sentiment: The Role of Media in the Stock Market](https://doi.org/10.1111/j.1540-6261.2007.01232.x) — Tetlock, 2007.  
  The paper that made media tone a variable in asset pricing. Everything downstream argues with it.
- [More Than Words: Quantifying Language to Measure Firms' Fundamentals](https://doi.org/10.1111/j.1540-6261.2008.01362.x) — Tetlock, Saar-Tsechansky, Macskassy, 2008.  
  Extends tone from market reaction to firm fundamentals — the move from correlation to content.
- [Is all that talk just noise? The information content of internet stock message boards](https://doi.org/10.1111/j.1540-6261.2004.00662.x) — Antweiler, Frank, 2004.  
  The retail-forum counterpart, and an early warning that volume of talk is not information.
- [All the News That's Fit to Reprint: Do Investors React to Stale Information?](https://doi.org/10.1093/rfs/hhq141) — Tetlock, 2011.  
  Stale news still moves prices, which is a problem for anyone treating a news index as new information.

## Dictionaries, and why they need care

- [When Is a Liability Not a Liability? Textual Analysis, Dictionaries, and 10-Ks](https://doi.org/10.1111/j.1540-6261.2010.01625.x) — Loughran, McDonald, 2011.  
  Why a general-purpose sentiment dictionary misreads financial text. The origin of the LM word lists.
- [The Use of Word Lists in Textual Analysis](https://doi.org/10.1080/15427560.2015.1000335) — Loughran, McDonald, 2015.  
  The practical companion: what word lists can and cannot support.
- [Textual Analysis in Accounting and Finance: A Survey](https://doi.org/10.1111/1475-679X.12123) — Loughran, McDonald, 2016.  
  The best survey of the dictionary-era literature, and the natural complement to ours.
- [Lexicon-Based Methods for Sentiment Analysis](https://doi.org/10.1162/COLI_a_00049) — Taboada, Brooke, Tofiloski, Voll, Stede, 2011.  
  The linguistics side of the same question, with the valence-shifter machinery most finance work omits.
- [Word power: A new approach for content analysis](https://doi.org/10.1016/j.jfineco.2013.08.018) — Jegadeesh, Wu, 2013.  
  Term weighting learned from returns rather than assumed — the bridge to supervised approaches.

## Text as data — the methodological core

- [Text as data](https://doi.org/10.1257/jel.20181020) — Gentzkow, Kelly, Taddy, 2019.  
  The standard reference for treating text as a high-dimensional covariate. Read before choosing any estimator.
- [Text as Data: The Promise and Pitfalls of Automatic Content Analysis Methods for Political Texts](https://doi.org/10.1093/pan/mps028) — Grimmer, Stewart, 2013.  
  The political-science statement of the same programme, and still the clearest on what can go wrong.
- [Multinomial Inverse Regression for Text Analysis](https://doi.org/10.1080/01621459.2012.734168) — Taddy, 2013.  
  The inverse-regression idea that makes sufficient reduction of a document tractable.
- [Distributed Multinomial Regression](https://doi.org/10.1214/15-AOAS831) — Taddy, 2015.  
  The version that scales, and the one implemented in textir.
- [Measuring Group Differences in High-Dimensional Choices: Method and Application to Congressional Speech](https://doi.org/10.3982/ECTA16566) — Gentzkow, Shapiro, Taddy, 2019.  
  How to compare text across groups without the bias that naive counts introduce.
- [Text selection](https://doi.org/10.2139/ssrn.3491942) — Kelly, Manela, Moreira, 2019.  
  What is missing from a corpus matters as much as what is in it.

## Topic models

- [Latent Dirichlet Allocation](http://dl.acm.org/citation.cfm?id=944919.944937) — Blei, Ng, Jordan, 2003.  
  The origin. Still the baseline every topical index is measured against.
- [Dynamic Topic Models](https://doi.org/10.1145/1143844.1143859) — Blei, Lafferty, 2006.  
  Topics that evolve — the version that fits an economic time series.
- [A correlated topic model of Science](https://doi.org/10.1214/07-AOAS114) — Blei, Lafferty, 2007.  
  Relaxes the independence assumption that makes plain LDA awkward on economic corpora.

## From text to macroeconomic indices

- [Measuring Economic Policy Uncertainty](https://doi.org/10.1093/qje/qjw024) — Baker, Bloom, Davis, 2016.  
  The index that showed a keyword count could become an economic variable. The direct ancestor of our EPU work.
- [Words are the New Numbers: A Newsy Coincident Index of the Business Cycle](https://doi.org/10.1080/07350015.2018.1506344) — Thorsrud, 2020.  
  A newsy coincident index of the business cycle — the cleanest demonstration of text as a real-time macro indicator.
- [The value of news for economic developments](https://doi.org/10.1016/j.jeconom.2018.11.013) — Larsen, Thorsrud, 2019.  
  The econometric case for what news adds beyond standard macro data.
- [Measuring News Sentiment](https://doi.org/10.24148/wp2017-01) — Shapiro, Südhof, Wilson, 2018.  
  A widely used news sentiment index, and a transparent account of how it is built.
- [News implied volatility and disaster concerns](https://doi.org/10.1016/j.jfineco.2016.01.032) — Manela, Moreira, 2017.  
  Text used to recover a risk measure rather than a sentiment level.
- [Narrative Economics](https://doi.org/10.1257/aer.107.4.967) — Shiller, 2017.  
  The argument for why any of this should matter economically. Short, and worth the detour.

## Central bank and political communication

- [Shocking language: Understanding the macroeconomic effects of central bank communication](https://doi.org/10.1016/j.jinteco.2015.12.008) — Hansen, McMahon, 2016.  
  Central bank communication as a measurable shock.
- [Transparency and Deliberation Within the FOMC: A Computational Linguistics Approach](https://doi.org/10.1093/qje/qjx045) — Hansen, McMahon, Prat, 2018.  
  What transparency does to deliberation, recovered from the transcripts themselves.
- [What Drives Media Slant? Evidence From U.S. Daily Newspapers](https://doi.org/10.3982/ECTA7195) — Gentzkow, Shapiro, 2010.  
  Media slant as demand-driven — essential context before reading any news index as objective.

## Firms, disclosure, and attention

- [Text-based Network Industries and Endogenous Product Differentiation](https://doi.org/10.1086/688176) — Hoberg, Phillips, 2016.  
  Product descriptions as data: industry classification rebuilt from 10-K text.
- [Tone Management](https://doi.org/10.2308/accr-50684) — Huang, Teoh, Zhang, 2014.  
  Managers choose their tone strategically, which constrains what abnormal tone can identify.
- [The Sum of All FEARS Investor Sentiment and Asset Prices](https://doi.org/10.1093/rfs/hhu072) — Da, Engelberg, Gao, 2015.  
  Search behaviour as a sentiment proxy — the attention-based alternative to news.
- [Hedging Climate Change News](https://doi.org/10.1093/rfs/hhz072) — Engle, Giglio, Kelly, Lee, Stroebel, 2020.  
  Building a tradable hedge from a news-based climate index. The closest neighbour to our climate work.

---

*Something essential missing? [Tell us](https://github.com/SentometricsResearch/) — the list is meant to be argued with.*
