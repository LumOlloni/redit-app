import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className='container'>
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle'></i> {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
