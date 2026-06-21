import React, { useId } from "react";

function Select({ label, options, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          className="text-sm font-medium text-zinc-300 tracking-wide"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        className={`
          w-full px-4 py-2.5 rounded-lg
          bg-zinc-800 border border-zinc-700
          text-white text-sm
          outline-none cursor-pointer
          focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20
          transition-all duration-200
          ${className}
        `}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option} className="bg-zinc-800">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
