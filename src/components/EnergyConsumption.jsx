import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function EnergyConsumption() {
  const data = [
    { day: "Mon", kwh: 420 },
    { day: "Tue", kwh: 380 },
    { day: "Wed", kwh: 460 },
    { day: "Thu", kwh: 410 },
    { day: "Fri", kwh: 520 },
    { day: "Sat", kwh: 300 },
    { day: "Sun", kwh: 260 }
  ];

  return (
    <div className="card">
      <div className="card-header">
        Energy Consumption
      </div>

      <div style={{ width: "100%", height: 150 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="energyColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#12395B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#12395B" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            
            <XAxis dataKey="day" />
            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="kwh"
              stroke="#12395B"
              fillOpacity={1}
              fill="url(#energyColor)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EnergyConsumption;