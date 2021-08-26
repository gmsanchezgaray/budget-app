import React from "react";

import "./Form.scss";

const Form = () => {
  const mov = {
    id: null,
    type: "",
    category: "",
    mount: 0,
    date: "",
  };

  return (
    <div className="form__container">
      <form className="form__card" onSubmit={(event) => event.preventDefault()}>
        <select className="form__card--element">
          <option>Income</option>
          <option>Expense</option>
        </select>
        <select className="form__card--element">
          <option>Entry</option>
          <option>Transaction</option>
          <option>Services</option>
          <option>Taxes</option>
        </select>

        <input
          type="number"
          placeholder="Put an amount"
          className="form__card--element"
        />
        <input type="date" className="form__card--element" />
        <button type="submit" className="form__card--button">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
