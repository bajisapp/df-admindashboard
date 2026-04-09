import React from "react";
import "./dashboard.css";
import FlowChart from "../components/FlowChart";
import AirQualityChart from "../components/AirQualityChart";
import HeatMapChart from "../components/HeatMapChart";
import AlertsCard from "../components/AlertsCard";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import RentPremiumChart from "../components/RentPremiumChart";
import AirQualityPremium from "../components/AirQualityPremium";
import { Alert } from "bootstrap/dist/js/bootstrap.bundle.min";
import AlertsActions from "../components/AlertsActions";
import AlertsActionsCard from "../components/AlertsActionsCard";
import Spaceutiliztion from "../components/Spaceutiliztion";
import EnergyConsumption from "../components/EnergyConsumption";

function Dashboard() {

  const data = [
    { name: "1h", value: 30 },
    { name: "2h", value: 45 },
    { name: "3h", value: 28 },
    { name: "4h", value: 60 },
    { name: "5h", value: 50 },
    { name: "6h", value: 75 }
  ];

  return (
    <div className="">

      {/* TOP BOXES */}
     <div className="row g-3 p-4">

  {/* 1 */}
  <div className="col-md-3">
    <div className="card stat-box border-primary">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted">Workspace Quality Index</small>
          <h4 className="mb-0">
            82 <span className="text-muted fs-6">↑ 3%</span>
          </h4>
        </div>

        <div className="icon-circle">
          <i className='bx bx-trending-up'></i>
        </div>
      </div>
    </div>
  </div>

  {/* 2 */}
  <div className="col-md-3">
    <div className="card stat-box">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted">Workspace Experience Index</small>
          <h4 className="mb-0">84</h4>
        </div>

        <div className="icon-circle">
          <i className='bx bx-group'></i>
        </div>
      </div>
    </div>
  </div>

  {/* 3 */}
  <div className="col-md-3">
    <div className="card stat-box border-warning">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted">Energy / OPEX Savings</small>
          <div className="d-flex align-items-center gap-2">
            <h4 className="mb-0">16%</h4>
            <small className="text-success">+ Resolved</small>
          </div>
        </div>

        <div className="icon-circle">
          <i className='bx bx-bolt-circle'></i>
        </div>
      </div>
    </div>
  </div>

  {/* 4 */}
  <div className="col-md-3">
    <div className="card stat-box">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted">Marketplace Revenue</small>
          <h4 className="mb-0">$17,850</h4>
        </div>

        <div className="icon-circle">
          <i className='bx bx-bar-chart-alt-2'></i>
        </div>
      </div>
    </div>
  </div>

</div>
     <div className="row g-3 pt-0 px-4 pb-4">
        <div className="col-md-3">
         {/* <HeatMapChart /> */} 
          <FlowChart />
          <div className="pt-3">
          <AirQualityChart />
          </div>
        </div>
        <div className="col-md-3">
          <AirQualityPremium />
            <div className="pt-3">
          <RentPremiumChart />
          </div>
        </div>
        <div className="col-md-3">
          <AlertsActionsCard />
       
          <div className="pt-3">
            <AlertsCard />
           </div>
            </div>

            <div className="col-md-3">
              <Spaceutiliztion />
 <div className="pt-3">
  <EnergyConsumption />
 </div>

            </div>
      </div>
   

    </div>
  );
}

export default Dashboard;