import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", error = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-zinc-300">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          className={`w-[80%] px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-500 text-sm outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-200 ${error ? "border-red-500" : ""} ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  },
);

export default Input;
