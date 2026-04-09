import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  CartesianGrid,
  Cell
} from "recharts";

const data = [
  { name: "WOI", value: 80 },
  { name: "WEI", value: 65 },
  { name: "", value: 75 },
  { name: "Portfolio", value: 95 }
];
import './chart.css'
function RentPremiumChart() {
  return (
    <div className="card p-3 stat-box">


      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
          
          <CartesianGrid vertical={false} stroke="#eee" />

          <XAxis 
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />

          <Bar dataKey="value" radius={[4,4,0,0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  index === 0 ? "#0b2e4f" :
                  index === 1 ? "#2f7a8a" :
                  index === 2 ? "#173b7a" :
                  "#d4832a"
                }
              />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>

      <div className="text-center small text-muted">
        +2.5% Rent Premium Potential
      </div>
    </div>
  );
}

export default RentPremiumChart;