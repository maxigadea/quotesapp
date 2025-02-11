import React from "react";
import { MessageCardProps } from "../../types/props";

export const MessageCard: React.FC<MessageCardProps> = ({
  message = "No se encontró la frase.",
  className = "",
}) => {
  return (
    <div
      className={`${className ? className : "flex flex-col items-center justify-center p-6 bg-white text-gray-700 w-full"}`}
    >
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
};
