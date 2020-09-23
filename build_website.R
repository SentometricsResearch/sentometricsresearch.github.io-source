blogdown::install_hugo()
blogdown::build_site()
file.copy("CNAME", "public")
file.copy(".nojekyll", "public")