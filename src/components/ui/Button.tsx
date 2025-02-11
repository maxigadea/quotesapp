import React from "react";
import { ButtonProps } from "../../types/props";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className ? className : "px-4 py-2 border border-gray-300 rounded-md bg-white text-black hover:bg-gray-100 transition-all"}`}
    >
      {children}
    </button>
  );
};
