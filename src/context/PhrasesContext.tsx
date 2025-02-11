import { createContext, useContext } from "react";

interface PhrasesContextType {
  phrases: string[];
  newPhrase: string;
  searchTerm: string;
  addPhrase: (e: React.FormEvent) => void;
  deletePhrase: (index: number) => void;
  filteredPhrases: string[];
  setNewPhrase: (phrase: string) => void;
  setSearchTerm: (term: string) => void;
  error: string | null
}

export const PhrasesContext = createContext<PhrasesContextType>({
  phrases: [],
  newPhrase: "",
  searchTerm: "",
  addPhrase: () => {},
  deletePhrase: () => {},
  filteredPhrases: [],
  setNewPhrase: () => {},
  setSearchTerm: () => {},
  error: null
});

export const usePhrases = () => useContext(PhrasesContext);