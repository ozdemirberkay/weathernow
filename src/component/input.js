import React from "react";

const Input = ({ onQueryChange, value, placeholder, onEnter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter?.();
          }
        }}
        className="input"
      />
    </div>
  );
};

export default Input;
