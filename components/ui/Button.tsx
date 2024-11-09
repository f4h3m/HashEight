import Link from "next/link";
import React from "react";

const Button = ({ children, variant = "primary", href }) => {
  const buttonStyles = {
    primary: "bg-white text-black font-bold py-2 px-8 rounded",
  };

  return (
    <button className={buttonStyles[variant]}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
