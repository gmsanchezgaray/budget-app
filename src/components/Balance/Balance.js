import React, { useContext } from "react";

import "./Balance.scss";

const Balance = ({ total }) => {
  return (
    <>
      <div className="d-flex justify-content-end align-items-center">
        <h5 className="mb-0 mx-3">Total Balance</h5>
        <h1 className="mb-0">
          <span class="badge bg-secondary px-5">${total}</span>
        </h1>
      </div>
    </>
  );
};

export default Balance;
