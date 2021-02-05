import { createClassFromSpec } from "react-vega";

const spec = require("./chart.json");

const BarChart = createClassFromSpec({
  spec,
});

export default BarChart;
