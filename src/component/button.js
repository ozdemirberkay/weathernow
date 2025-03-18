import React from "react";

const Button = ({ onClick, disabled, text }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      <div>{text}</div>
    </button>
  );
};

export default Button;
