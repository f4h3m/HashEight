import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary"; // Explicitly define allowed variants
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // Provide a default variant
  href,
}) => {
  const buttonStyles = {
    primary: "bg-white text-black font-bold py-2 px-8 rounded",
    // Add more variants as needed
  };

  return (
    <button className={buttonStyles[variant]}>
      {href ? <Link href={href}>{children}</Link> : <>{children}</>}
    </button>
  );
};

export default Button;
