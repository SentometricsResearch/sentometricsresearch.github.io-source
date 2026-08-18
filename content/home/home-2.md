+++
# A Demo section created with the Blank widget.
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 2 # Order that this section will appear.

title = "In a nutshell"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  gradient_start = "#8a43a1"
  gradient_end = "#0b0a1f"
  
  # Background image.
  image = "sentometrics-logo.png"  # Name of image in `static/img/`.
  image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  image_position = "center"  # Options include `left`, `center` (default), or `right`.
  image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

  # Text color (true=light or false=dark).
  text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
 
[cta_alt]
  url = "https://onlinelibrary.wiley.com/doi/full/10.1111/joes.12370"
  label = "Survey paper"
+++
Within the growing landscape at the frontier of text mining, sentiment analysis, and econometrics,
the field **sentometrics** has emerged. Researchers in sentometrics study how the qualitative
sentiment embedded in textual data becomes a quantitative variable — and how that variable behaves
once it enters an econometric analysis.

This hub is the **infrastructure** of that field rather than its directory. We do not try to list
what everyone publishes: search engines do that better, and a list that falls behind misleads. What
we provide is what a researcher actually needs to work — the **indices** we build and keep updated,
the **open-source software** that computes them, the **methods papers** behind both, and the people
who can help.

New here? Read the [survey paper](https://onlinelibrary.wiley.com/doi/full/10.1111/joes.12370), then
the R package [sentometrics](https://sentometricsresearch.github.io/sentometrics). If you want a
guided path into the literature, we keep a short, opinionated
[reading list](https://sentometrics-research.com/reading/).
