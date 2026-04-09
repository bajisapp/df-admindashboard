import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import person from '../assets/person.png'

function Header({ setOpen }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const userRef = useRef();
  const notifRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!userRef.current?.contains(e.target)) {
        setShowUserMenu(false);
      }
      if (!notifRef.current?.contains(e.target)) {
        setShowNotif(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="header">

      {/* LEFT SIDE */}
      <div className="header-left">

        <div className="menu-btn" onClick={() => setOpen(true)}>
          <i className='bx bx-menu'></i>
        </div>

              <h4 className="page-title">
  <span className="desktop-title">Smart Data & Office Platform</span>
  <span className="mobile-title">Xwerk</span>
</h4>
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">

        <div className="search-box">
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search..." />
        </div>

        <div
          className="icon"
          ref={notifRef}
          onClick={() => setShowNotif(!showNotif)}
        >
          <i className='bx bxs-bell'></i>
          <span className="badge">3</span>

          {showNotif && (
            <div className="dropdown notif-dropdown">
              <p><i className='bx bx-error-circle'></i> Incident reported</p>
              <p><i className='bx bx-task'></i> 5 new work orders</p>
              <p><i className='bx bx-info-circle'></i> System update</p>
            </div>
          )}
        </div>

        <div
          className="user"
          ref={userRef}
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <img src={person} alt="user" className="user-avatar" />
          <span>Admin</span>

          {showUserMenu && (
            <div className="dropdown user-dropdown">
              <p><i className='bx bx-user'></i> Profile</p>
              <p><i className='bx bx-cog'></i> Settings</p>
              <p className="logout" onClick={handleLogout}>
                <i className='bx bx-log-out'></i> Logout
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Header;