import React from "react";

import "./History.scss";

const History = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">History</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            Category Name <span>⬆ $9.000,00</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Category Name <span>⬆ $9.000,00</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            Category Name <span>⬆ $9.000,00</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default History;
