import React from "react";
import {
  AlertCircle,
  CheckCircle,
  FileText,
  Wrench,
  Folder,
  LayoutGrid
} from "lucide-react";
import './Alert.css';

function AlertsActions() {
  return (
    <div>

      {/* CARD 1 */}
      <div className="alerts-card">
        <div className="alerts-title">Alerts & Actions</div>

        <div className="alert-row">
          <AlertCircle size={16} color="#e74c3c" />
          <div>
            <div className="alert-text">Incident reported - Level 8</div>
            <div className="alert-time">8:30 AM</div>
          </div>
        </div>

        <div className="alert-row">
          <CheckCircle size={16} color="#27ae60" />
          <div className="alert-text">5 new work orders assigned</div>
        </div>

        <div className="divider" />

        <div className="action-row">
          <LayoutGrid size={16}/> Open Marketplace
        </div>

        <div className="action-row">
          <Wrench size={16}/> Trigger work assigned
        </div>

        <div className="action-row">
          <Folder size={16}/> Create Work Order
        </div>
      </div>


      {/* CARD 2 */}
      <div className="alerts-card">
        <div className="alerts-title">Alerts & Actions</div>

        <div className="alert-row">
          <AlertCircle size={16} color="#e74c3c" />
          <div>
            <div className="alert-text">Incident reported - Level 8</div>
            <div className="alert-time">8:30 AM</div>
          </div>
        </div>

        <div className="alert-row">
          <FileText size={16} color="#3498db" />
          <div className="alert-text">5 new work orders assigned</div>
        </div>

        <button className="btn-blue">
          Open Marketplace
        </button>

        <button className="btn-orange">
          Trigger At Simulation
        </button>

      </div>

    </div>
  );
}

export default AlertsActions;