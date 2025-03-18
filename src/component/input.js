import React from "react";

const Input = ({ onQueryChange, value, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onQueryChange(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default Input;
