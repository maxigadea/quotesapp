import React from "react";
import { Input } from "./ui/Input";
import { usePhrases } from "../context/PhrasesContext";

const Filter: React.FC = () => {
  const { searchTerm, setSearchTerm } = usePhrases();
  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Buscar frases..."
      className="w-full px-3 py-2 border rounded mb-4"
    />
  );
};

export default Filter;
