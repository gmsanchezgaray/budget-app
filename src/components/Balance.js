import React from "react";

import "./Balance.scss";

const Balance = () => {
  return (
    <>
      <div className="balance__card">
        <p className="balance__card--total">$2,860.00</p>
        <p className="balance__card--label">Total Balance</p>
      </div>
      <div className="balance__body">
        <div className="detail">
          <div className="detail__icon--income">
            <h1 style={{ color: "#44CCBE" }}>⬇</h1>
          </div>
          <div>
            <p className="detail__label">Income</p>
            <p className="detail__amount">$8,510.00</p>
          </div>
        </div>
        <div className="detail">
          <div className="detail__icon--expense">
            <h1 style={{ color: "#F56D6D" }}>⬆</h1>
          </div>
          <div>
            <p className="detail__label">Expense</p>
            <p className="detail__amount">$2,410.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
