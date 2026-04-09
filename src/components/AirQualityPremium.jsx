import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const data = [
  { time: "", co2: 110, pmax: 100, voc: 85 },
  { time: "", co2: 112, pmax: 102, voc: 86 },
  { time: "12 h", co2: 115, pmax: 103, voc: 88 },
  { time: "", co2: 114, pmax: 104, voc: 89 },
  { time: "", co2: 116, pmax: 105, voc: 90 },
  { time: "16 h", co2: 118, pmax: 106, voc: 91 },
  { time: "", co2: 117, pmax: 107, voc: 92 }
];

function AirQualityPremium() {
  return (
    <div className="card p-3 stat-box">
      <h6 className="mb-2">Air Quality</h6>

      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#777", fontSize: 11 }}
          />

          {/* LEFT LABELS */}
          <YAxis
            yAxisId="left"
            orientation="left"
            domain={[80, 120]}
            ticks={[120, 100, 80]}
            width={50}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#777", fontSize: 11 }}
            tickFormatter={(v) =>
              v === 120 ? "CO₂" :
              v === 100 ? "PMax" :
              v === 80 ? "VOC" : ""
            }
          />

          {/* RIGHT VALUES */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[80, 120]}
            ticks={[80, 100, 120]}
            width={30}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#777", fontSize: 11 }}
          />

          {/* invisible line to activate left axis */}
          <Line
            yAxisId="left"
            dataKey="co2"
            stroke="transparent"
            dot={false}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="co2"
            stroke="#63b96c"
            strokeWidth={2}
            dot={false}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="pmax"
            stroke="#4c78a8"
            strokeWidth={2}
            dot={false}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="voc"
            stroke="#d38b2c"
            strokeWidth={2}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>

      <div className="small fw-semibold mt-2">
        +2.5% Rent Premium
      </div>
    </div>
  );
}

export default AirQualityPremium;