import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
