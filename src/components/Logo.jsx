import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="flex flex-col items-start" style={{ width }}>
      <span className="text-xl font-extrabold tracking-tight text-white">
        INK<span className="text-fuchsia-500">.</span>
      </span>
      <div className="h-0.5 w-full bg-fuchsia-500 rounded-full mt-0.5" />
    </div>
  );
}

export default Logo;
