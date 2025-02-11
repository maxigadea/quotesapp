import { useState } from "react";

export function usePhrasesLogic() {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [newPhrase, setNewPhrase] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const addPhrase = (e: React.FormEvent): void => {
    e.preventDefault();
    setError(null);

    try {
      if (newPhrase.trim() === "") {
        throw new Error("La frase no puede estar vacía.");
      }

      if (newPhrase.length > 100) {
        throw new Error("La frase es demasiado larga (máximo 100 caracteres).");
      }

      setPhrases((prev) => [...prev, newPhrase.trim()]);
      setNewPhrase("");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  const deletePhrase = (index: number): void => {
    try {
        if (index < 0 || index >= phrases.length) {
          throw new Error("Índice inválido. No se puede eliminar la frase.");
        }
        
        setPhrases((prev) => prev.filter((_, i) => i !== index));
      } catch (err) {
        if (err instanceof Error) console.error(err.message);
      }
  };

  const filteredPhrases = phrases.filter((phrase: string) =>
    phrase.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    phrases,
    newPhrase,
    searchTerm,
    addPhrase,
    deletePhrase,
    filteredPhrases,
    setNewPhrase,
    setSearchTerm,
    error
  };
}
