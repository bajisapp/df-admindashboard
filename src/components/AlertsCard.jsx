import React from "react";
import {
  AlertCircle,
  CheckCircle,
  LayoutGrid,
  Wrench,
  FilePlus
} from "lucide-react";
import "./Alert.css";

function AlertsCard() {
  return (
    <div className="alerts-card">

      <div className="alerts-title">
        Alerts & Actions
      </div>

      {/* Incident */}
      <div className="alert-item">
        <AlertCircle size={14} className="icon red" />
        <div>
          <div className="alert-text">
            Incident reported - Level 8
          </div>
          <div className="alert-time">
            8:30 AM
          </div>
        </div>
      </div>

      {/* Work orders */}
      <div className="alert-item">
        <CheckCircle size={14} className="icon green" />
        <div className="alert-text">
          5 new work orders assigned
        </div>
      </div>

      <div className="divider" />

      {/* Actions */}
      <button className="btn-market">
  <LayoutGrid size={14} />
  Open Marketplace
</button>

<button className="btn-trigger">
  <Wrench size={14} />
  Trigger At Simulation
</button>

     

    </div>
  );
}

export default AlertsCard;