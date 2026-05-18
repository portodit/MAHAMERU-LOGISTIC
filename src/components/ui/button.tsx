"use client";

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
}

export function Button({
  className = "",
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    default: "bg-grays text-white hover:opacity-90",
    secondary: "bg-white text-secondary-600 hover:opacity-90",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}