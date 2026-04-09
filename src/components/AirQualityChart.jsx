import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  CartesianGrid
} from "recharts";
import './chart.css'

const data = [
  { time: "0", value: 28 },
  { time: "", value: 30 },
  { time: "6", value: 34 },
  { time: "", value: 32 },
  { time: "11", value: 27 },
  { time: "", value: 24 },
  { time: "13", value: 29 },
  { time: "", value: 33 },
  { time: "41", value: 31 },
  { time: "", value: 26 }
];

function AirQualityChart() {
  return (
    <div className="card p-3 stat-box">
      <h6>Air Quality</h6>

      <ResponsiveContainer width="100%" height={120}>
        <AreaChart data={data}>

          {/* gradient fill */}
          <defs>
            <linearGradient id="airFill" x1="0" y1="0" x2="0" y2="1">
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
            fill="url(#airFill)"
            dot={false}
          />

        </AreaChart>
      </ResponsiveContainer>

      {/* legend */}
      <div className="mt-2 d-flex align-items-center gap-3 small text-muted">
        <span>
          <span className="legend-dot co2"></span> CO2 H
        </span>

        <span>
          <span className="legend-dot pm"></span> jighn
        </span>
      </div>

    </div>
  );
}

export default AirQualityChart;