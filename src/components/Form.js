import React from "react";

import "./Form.scss";

const Form = ({ showForm }) => {
  return (
    <div className="form__container">
      <form
        className={showForm ? "form-visible" : "form-invisible"}
        onSubmit={(event) => event.preventDefault()}
      >
        <select>
          <option>Income</option>
          <option>Expense</option>
        </select>
        <select>
          <option>Entry</option>
          <option>Transaction</option>
          <option>Services</option>
          <option>Taxes</option>
        </select>

        <input type="number" />
        <input type="date" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;
