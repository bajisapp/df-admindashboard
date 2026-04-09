import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  CartesianGrid
} from "recharts";
import "./chart.css";

const data = [
  { time: "24 h", value: 22 },
  { time: "", value: 24 },
  { time: "", value: 28 },
  { time: "24 h", value: 32 },
  { time: "", value: 30 },
  { time: "", value: 26 },
  { time: "14 h", value: 25 },
  { time: "", value: 29 },
  { time: "", value: 33 },
  { time: "24 h", value: 28 },
  { time: "", value: 26 }
];

function FlowChart() {
  return (
    <div className="card flow-card stat-box p-3">
      <h6 className="chart-title">Flow Congestion Snapshot</h6>

      <ResponsiveContainer width="100%" height={110}>
        <AreaChart data={data}>
          
          <defs>
            <linearGradient id="colorFlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6c8ea3" stopOpacity={0.25}/>
              <stop offset="100%" stopColor="#6c8ea3" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={true}
            horizontal={false}
            stroke="#e9ecef"
          />

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#6c8ea3"
            strokeWidth={2}
            fill="url(#colorFlow)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default FlowChart;