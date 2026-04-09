import React from "react";
import "./logindesign01.css";
import bgimage from "../assets/background-image-01.png";
import logoimg from "../assets/logo-w.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
  // later you can add validation here
  navigate("/dashboard");
};
  return (
    <div className="login-page">
      <div className="login-wrapper container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6 left-section text-white">
            <img src={logoimg} alt="logo" className="logo" />
            <h1 className="brand-title">
  Smart Data & <br /> Office Platform
</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="login-box">
             <h4 className="text-center mb-1" style={{color:'#062f5b'}}>
   Xwerk Admin Portal
</h4>
<p className="text-center text-muted mb-4">
    Authorized Access Only
</p>
              <div className="input-group mb-3">
  <span className="input-group-text">
    <i className="bi bi-person"></i>
  </span>
              <input
                type="text"
                placeholder="Username"
                className="form-control "
              />
</div>
<div className="input-group mb-3">
    <span className="input-group-text">
    <i className="bi bi-lock"></i>
  </span>
              <input
                type="password"
                placeholder="Password"
                className="form-control "
              />
</div>
              {/* <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Remember me</label>
              </div> */}

              <button onClick={handleLogin} className="btn btn-primary w-100 mb-2">
  <i className="bi bi-box-arrow-in-right me-2"></i>
  Login
</button>

              <div className="text-center small">
  <p className="mb-1">
    <i className="bi bi-shield-lock me-2"></i>
    Secure Admin Access
  </p>
  <p className="text-muted">
    <i className="bi bi-headset me-2"></i>
    Contact IT support for access
  </p>
</div>

            </div>
          </div>

        </div>
      </div>
</div>
  );
}

export default Login;