import React from "react";

const ErrorState = ({ variant = "generic", message, onRetry }) => {
  return (
    <div className={`error-state error-state--${variant}`} role="alert">
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="button error-retry" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
