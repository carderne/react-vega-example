import React from "react";
import BarChart from "./BarChart.js";

const barData = {
  table: [
    { category: "A", amount: 28 },
    { category: "B", amount: 55 },
    { category: "C", amount: 43 },
    { category: "D", amount: 91 },
    { category: "E", amount: 81 },
    { category: "F", amount: 53 },
    { category: "G", amount: 19 },
    { category: "H", amount: 89 },
  ],
};

function handleHover(...args) {
  console.log(args);
}
const signalListeners = { tooltip: handleHover };

export default function App() {
  return (
    <div style={{ margin: "100px auto 0px auto", maxWidth: 960 }}>
      <BarChart data={barData} signalListeners={signalListeners} />
    </div>
  );
}
