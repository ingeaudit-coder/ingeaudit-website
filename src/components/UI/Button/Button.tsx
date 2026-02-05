import style from "@/src/components/UI/Button/Button.module.css";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({ variant = "primary", children, className, ...props }) => {
  const combinedClassName = `${style.btn} ${style[variant]} ${className || ""}`;

  return (
    <>
      <button className={combinedClassName} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
