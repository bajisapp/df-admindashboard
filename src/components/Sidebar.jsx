import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import logo from '../assets/xwerk-logo.png'
import 'boxicons/css/boxicons.min.css';

function Sidebar({ open, setOpen }) {
  return (
    <>
    <div className={`sidebar ${open ? "open" : ""}`}>
      <h2 className="logo">
        <img src={logo} alt="Xwerk Logo" className="logo-img" />
      </h2>

      <ul>
        <li className="section">Core</li>

        <NavLink to="/dashboard" end className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-home'></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/analytics" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-bar-chart'></i>
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/dashboard/data" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-data'></i>
          <span>Data</span>
        </NavLink>

        <NavLink to="/dashboard/users" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-user'></i>
          <span>Users</span>
        </NavLink>

        <li className="section">Modules</li>

        <NavLink to="/dashboard/neoguest" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-buildings'></i>
          <span>NeoGuest</span>
        </NavLink>

        <NavLink to="/dashboard/access" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-lock'></i>
          <span>Access</span>
        </NavLink>

        <NavLink to="/dashboard/iot" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-chip'></i>
          <span>IoT</span>
        </NavLink>

        <li className="section">System</li>

        <NavLink to="/dashboard/settings" className="nav-item" onClick={()=>setOpen(false)}>
          <i className='bx bx-cog'></i>
          <span>Settings</span>
        </NavLink>
      </ul>
    </div>

    {/* overlay */}
    {open && <div className="overlay" onClick={() => setOpen(false)} />}
    
    </>
  );
}

export default Sidebar;