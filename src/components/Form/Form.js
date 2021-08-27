import React from "react";

import "./Form.scss";

const Form = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-auto">
          <input type="text" className="form-control" value="" />
        </div>
        <div className="col-auto">
          <input type="number" className="form-control" value="4.545" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Income
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
