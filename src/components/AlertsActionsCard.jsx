import React from "react";
import {
  AlertCircle,
  CheckCircle,
  LayoutGrid,
  Wrench,
  FilePlus
} from "lucide-react";
import './Alert.css'

function AlertsActionsCard() {
  return (
    <div className="alerts-card border stat-box   p-2">

      <div className="alerts-title pb-3">Alerts & Actions</div>

      <div className="action-row">
        <AlertCircle size={16} className="icon red" />
        <div>
          <div className="alert-text">
            Incident reported - Level 8
          </div>
          <div className="alert-time">8:30 AM</div>
        </div>
      </div>

      <div className="action-row">
        <CheckCircle size={16} className="icon green" />
        <div className="alert-text">
          5 new work orders assigned
        </div>
      </div>

      <div className="divider" />

      <div className="action-row pb-2">
        <LayoutGrid size={16} className="icon" />
        Open Marketplace
      </div>

      <div className="action-row pb-2">
        <Wrench size={16} className="icon" />
        Trigger work assigned
      </div>

      <div className="action-row pb-2">
        <FilePlus size={16} className="icon" />
        Create Work Order
      </div>

    </div>
  );
}

export default AlertsActionsCard;