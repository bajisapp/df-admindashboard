import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ["", "", "", "", "", "", ""];
const yLabels = ["", "", "", "", ""];

const data = [
  [0, 1, 2, 3, 2, 1, 0],
  [1, 2, 3, 4, 3, 2, 1],
  [2, 3, 5, 6, 5, 3, 2],
  [1, 2, 3, 4, 3, 2, 1],
  [0, 1, 2, 3, 2, 1, 0]
];

function HeatMapChart() {
  return (
    <div className="card p-3">
      <h6>Heatmap Overview</h6>

      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
      />
    </div>
  );
}

export default HeatMapChart;