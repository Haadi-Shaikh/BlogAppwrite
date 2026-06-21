import React from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-fuchsia-500 hover:bg-fuchsia-400 text-white shadow-sm shadow-fuchsia-500/20",
    secondary:
      "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 shadow-sm shadow-black/10",
    ghost:
      "bg-transparent hover:bg-zinc-800 text-zinc-300 border border-zinc-700",
    danger: "bg-red-600 hover:bg-red-500 text-white",
  };

  return (
    <button
      type={type}
      className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-zinc-900 ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
