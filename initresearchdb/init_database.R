
LOCATION <- "content/publication"

# dateUpdate <- paste0("**Last update**: ", format(Sys.Date(), "%B %d, %Y"))

template <- function(authors, date, title, link, type) {
paste0(
'---
authors:', "\n", authors, "\n",
'date: ', '"', date, '"', "\n",
'featured: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
publication: ""
publication_types: [', '"', type, '"', "]\n",
'tags:
- ""', "\n",
"title: ", '"', title, '"', "\n",
"url_pdf: ", link, "\n",
"---"
)
}

if (FALSE) {
  #################################################################
  ### MANUAL CORRECTIONS NEEDED IN CASE EXCEL FILE REGENERATED: ###
  ### Garc?a, van Schie, L?tkepohl, Junqu? de Fortuny
  #################################################################
  
  papersRaw <- readLines("initresearchdb/papers_exported.txt")
  papersRawSplit <- stringi::stri_split(papersRaw, fixed = " -- ")
  
  bibs <- lapply(papersRawSplit, function(x) {
    b <- RefManageR::BibEntry("Manual", author = x[2], title = x[3], year = x[1], date = x[1])
    x[2] <- paste0(sapply(unclass(b$author), "[[", "family"), collapse = ", ")
    x[3] <- gsub("\\\\", "", b$title)
    x
  })
  
  m <- do.call(rbind, bibs)
  colnames(m) <- c("YEAR", "AUTHORS", "TITLE", "LINK")
  # df <- data.frame(m, TYPE = "", TAG = "")
  # df <- data.frame(m, TYPE = sample(1:3, size = nrow(m), replace = TRUE), TAG = "")
  df <- data.frame(m, TYPE = 2, TAG = "")
  df$YEAR <- as.numeric(df$YEAR)
  # head(df)
  
  xlsx::write.xlsx(df, file = "initresearchdb/papers_overview.xlsx", row.names = FALSE)
}

papersAll <- readr::read_csv("initresearchdb/papers_overview.csv")

for (i in 1:nrow(papersAll)) {
  
  year <- papersAll[i, "YEAR"]
  date <- paste0(year, "-01", "-01")
  
  title <- papersAll[i, "TITLE"]
  link <- papersAll[i, "LINK"]
  type <- papersAll[i, "TYPE"]
  
  authors <- papersAll[i, "AUTHORS"]
  authors <- paste0("- ", stringi::stri_split(authors, regex = ", ")[[1]], collapse = "\n")
  
  index <- template(authors, date, title, link, type)
  
  folder <- i
  folder <- paste0(LOCATION, "/", trimws(folder, "both", whitespace = "-"))
  # if (file.exists(folder)) file.remove(folder)
  dir.create(folder)
  con <- file(paste0(folder, "/", "index.md"), encoding = "UTF-8")
  writeLines(index, con, sep = "\n")
  close(con)
}

