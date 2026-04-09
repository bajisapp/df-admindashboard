import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import './space.css'

function Spaceutiliztion() {
  const data = [
    { name: "Occupied", value: 72 },
    { name: "Available", value: 18 },
    { name: "Meeting", value: 10 }
  ];

  const COLORS = [
    "#12395B", // dark blue
    "#3C7E86", // teal
    "#d4832a"  // navy
  ];

  return (
    <div className="card">
      <div className="card-header">Space Utilization</div>

      <div style={{ width: "100%", height: 180 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={55}
              outerRadius={75}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="donut-legend">
        <span><i className="dot blue"></i>72% Occupied</span>
        <span><i className="dot teal"></i>18% Free</span>
        <span><i className="dot navy"></i>10% Meeting</span>
      </div>
    </div>
  );
}

export default Spaceutiliztion;