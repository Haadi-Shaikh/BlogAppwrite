import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", error = "", ...props }, ref) => {
    const id = useId();

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      width: "100%",
      // marginBottom: "5px",
      padding: "10px",
    };

    const labelStyle = {
      color: "#d4d4d8",
      fontSize: "14px",
      fontWeight: "500",
    };

    const inputStyle = {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "12px",
      backgroundColor: "#09090b",
      border: error ? "1px solid #ef4444" : "1px solid #3f3f46",
      color: "#ffffff",
      fontSize: "14px",
      outline: "none",
      boxSizing: "border-box",
      transition: "all 0.2s ease",
    };

    const errorStyle = {
      color: "#ef4444",
      fontSize: "12px",
    };

    return (
      <div style={containerStyle}>
        {label && (
          <label htmlFor={id} style={labelStyle}>
            {label}
          </label>
        )}

        <input
          id={id}
          ref={ref}
          type={type}
          style={inputStyle}
          className={className}
          {...props}
        />

        {error && <span style={errorStyle}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
