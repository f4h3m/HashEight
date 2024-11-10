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
    primary:
      "bg-white text-black font-bold py-3 px-8 duration-300 rounded hover:bg-black hover:text-white [&>span]:hover:scale-[20] overflow-hidden",
  };

  return (
    <button className={`relative ${buttonStyles[variant]}`}>
      <span className="block w-5 h-5 bg-black absolute -left-4 -top-4 rounded-full duration-300"></span>
      {href ? (
        <Link className="relative" href={href}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
