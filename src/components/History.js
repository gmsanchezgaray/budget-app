import React from "react";
import Activity from "./Activity";

import "./History.scss";

const History = () => {
  return (
    <>
      <div className="wrapper__header">
        <h2 className="wrapper__header--element">History</h2>
        <a href="#" className="wrapper__header--element">
          View detail
        </a>
      </div>
      <div className="history-card">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </>
  );
};

export default History;
