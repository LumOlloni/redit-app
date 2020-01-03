import React, { useContext } from "react";
import RedditContext from "../../context/reddit/redditContext";

const Alert = () => {
  const alertContext = useContext(RedditContext);
  const { alert } = alertContext;

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
