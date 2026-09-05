import React, { useState } from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  style = {},
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: {
      backgroundColor: isHovered ? "#d946ef" : "#c026d3",
      color: "#ffffff",
      border: "none",
    },
    secondary: {
      backgroundColor: isHovered ? "#3f3f46" : "#27272a",
      color: "#ffffff",
      border: "1px solid #52525b",
    },
    ghost: {
      backgroundColor: isHovered ? "#27272a" : "transparent",
      color: "#d4d4d8",
      border: "1px solid #52525b",
    },
    danger: {
      backgroundColor: isHovered ? "#ef4444" : "#dc2626",
      color: "#ffffff",
      border: "none",
    },
  };

  const buttonStyle = {
    width: "80%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.25s ease",
    boxSizing: "border-box",
    ...variants[variant],
    ...style,
  };

  return (
    <button
      type={type}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
