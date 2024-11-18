"use client";

import React from "react";

interface ButtonProps {
  size: "small" | "large"; // Updated to align with the provided design
  variant: "primary" | "secondary"; // Matches "Primary" and "Secondary" button styles
  children?: React.ReactNode;
  onClick?: () => void; // Allow the onClick handler
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
  onClick,
}) => {
  const baseClass =
    "font-semibold rounded-md transition-all inline-flex items-center justify-center";

  const sizeClass =
    size === "small"
      ? "text-sm px-4 py-2" // Small button: 14px / 16px
      : "text-md px-6 py-3"; // Large button: 16px / 20px

  const variantClass =
    variant === "primary"
      ? "bg-accent-blue text-white hover:bg-accent-light active:bg-accent-dark"
      : "border border-accent-blue text-accent-blue hover:bg-accent-light hover:text-white active:bg-accent-dark";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
