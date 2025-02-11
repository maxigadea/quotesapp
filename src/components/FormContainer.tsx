import React from "react";
import { usePhrases } from "../context/PhrasesContext";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

const FormContainer: React.FC = () => {
  const { addPhrase, newPhrase, setNewPhrase, error } = usePhrases();

  return (
    <form role="form" onSubmit={addPhrase} className="mb-4 flex flex-col gap-2">
      <div className="w-full flex flex-row items-center gap-4">
        <Input
          type="text"
          value={newPhrase}
          onChange={(e) => setNewPhrase(e.target.value)}
          placeholder="Ingrese una nueva frase"
          className="flex-grow px-3 py-2 border rounded"
        />
        <Button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Agregar
        </Button>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default FormContainer;
