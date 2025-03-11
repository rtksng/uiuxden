import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "gradient";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string; // Added className as an optional prop
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled = false,
  className = "", // Default to an empty string
}) => {
  const baseStyles =
    "px-[46px] py-4 rounded-full text-base font-medium transition duration-200";
  const primaryStyles =
    "bg-primary-dark2 text-white hover:bg-transparent border-2 border-transparent hover:text-primary-dark hover:border-primary-dark  focus:ring-2 focus:ring-primary-dark";
  const secondaryStyles =
    "border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-300";

  const styles = `${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`; // Include custom className
  return (
    <button className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;