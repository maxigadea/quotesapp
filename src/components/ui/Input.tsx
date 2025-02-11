import React from "react";
import { InputProps } from "../../types/props";

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className={`${className ? className : "px-4 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"}`}
    />
  );
};
