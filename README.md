# react-vega example with Altair data

This is an example demonstrating how to use [react-vega](https://github.com/vega/react-vega) to render a bar chart exported from Altair.

## Setup
```
npm install
```

## Running
```
npm start
```

The app will be served at: http://localhost:3000/react-vega-example

## Development
`App.js` imports the chart from `BarChart.js`, which imports the data from `chart.json` (all in the `./src/` directory.


## Altair
`chart.json` was created in Altair using the following code:
```
import altair as alt
import pandas as pd

source = pd.DataFrame({
    'a': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    'b': [28, 55, 43, 91, 81, 53, 19, 87, 52]
})

alt.Chart(source).mark_bar().encode(
    x='a',
    y='b'
)
```
