import React from "react";
import "./styles.scss"; 

const Spinner = () => {
  return (
    <div className="spinner w-4 h-4">
      <div className="circle">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Spinner;