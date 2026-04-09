import React from "react";
import './comingsoon.css'

function ComingSoon({ title }) {
  return (
    <div className="coming-container">
      <i className='bx bx-time-five coming-icon'></i>
      <h3>{title}</h3>
      <p>Module under development</p>
      <span>Coming Soon</span>
    </div>
  );
}

export default ComingSoon;