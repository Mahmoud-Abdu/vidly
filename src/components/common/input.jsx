import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  let focus = false;
//   if (name === "username") focus = true;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // autoFocus={focus}
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
