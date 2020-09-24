
MCCC_index = read.csv("../../static/files/MCCC_index.csv",stringsAsFactors = FALSE)
MCCC_index = MCCC_index[which(lubridate::day(MCCC_index$date) == 15),]
MCCC_index = MCCC_index[,c("date","index","roll")]

button = list()
for(i in 1:41){
  button[[i]] = list(method = "restyle",
                     args = list("transforms[0].value", unique(MCCC_index$index)[i]),
                     label = unique(MCCC_index$index)[i])
  
}

MCCC_index = MCCC_index[complete.cases(MCCC_index),]


suppressPackageStartupMessages({library(plotly)})
p <- MCCC_index %>%
  plot_ly(
    type = 'scatter', 
    mode = 'lines+markers',
    name = "30-MA",
    x = ~date, 
    y = ~roll,
    color = I('black'),
    opacity = 0.4,
    text      = ~paste('Date: ', date, '\n',
                       'Index: ', index, '\n',
                       '30-MA: ', roll, '\n'),
    hoverinfo = 'text',
    transforms = list(
      list(
        type = 'filter',
        target = ~ index,
        operation = '=',
        value = unique(MCCC_index$index)[1]
      )
    )) %>% layout(
      updatemenus = list(
        list(
          type = 'dropdown',
          active = 0,
          buttons = button
        )
      )
    )

widgetframe::saveWidgetframe(widgetframe::frameWidget(p,height = 600),file = "../../static/widget/climatechangewidget.html")

