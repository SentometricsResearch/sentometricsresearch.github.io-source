---
date: "2021-02-02"
diagram: true
authors: 
- Keven Bluteau
image:
  caption: ""
  placement: 3
math: true
title: 	A Century of Economic Policy Uncertainty Through the French-Canadian Lens
---

Leveraging a historical French-Canadian newspaper data set provided by the Bibliothèque et Archives Nationales du Québec (BAnQ) 
as well as a research collaboration with Radio-Canada, we have developed a century-long historical Economic Policy Uncertainty (EPU) index for the Canadian province of Quebec. 
In addition to providing a long historical view of the Quebec economy via the EPU,
this index complements the already available Canadian EPU by focusing on French-Canadian sources, which were notably a missing component of the index.

When looking over our 100-year time horizon, three peaks are particularly large: (i)
the Great Depression, (ii) the 2008 financial crisis, and (iii) the COVID-19 pandemic.
Moreover, the index tends to be higher post-war and during some other events such as
the patriation of the Canadian constitution in 1982 (a national event) or the Oka crisis in
1990 (a Quebec-specific event). More events are annotated in the figure.

Our data set and the historical aspect of our index raise some challenges. First, the archives of several news sources are grouped by issue rather than by individual articles,
which renders the standard EPU count impossible. Second, archives' availability for particular media sources differs over time, making the static-window standardization
used in the traditional sources’ aggregation biased. As such, we propose a novel token-distance-based triple approach to identify EPU mentions in
textual documents and use a dynamic normalization for the sources’ aggregation to address these problems. 

In the note accompanying the index, we show that our index outperforms the existing Canadian EPU when
nowcasting major Canadian and Quebec macroeconomic variables. 

_Check out the paper on this index!_

- Ardia, D., Bluteau, K., Kassem, A. (2021). **A century of economic policy uncertainty through the French-Canadian lens**. Economics Letters, 205. [Link](https://doi.org/10.1016/j.econlet.2021.109938) [Preprint](https://doi.org/10.2139/ssrn.3773702)

Download the data [here](https://sentometrics-research.com/download/epu-quebec/)
