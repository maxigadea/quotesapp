import { usePhrasesLogic } from "../hooks/usePhrases";
import { PhrasesContext } from './PhrasesContext';

interface PhrasesProviderProps {
  children: React.ReactNode;
}

export const PhrasesProvider: React.FC<PhrasesProviderProps> = ({children}) => {
    const phraseLogic = usePhrasesLogic();

    return (
        <PhrasesContext.Provider value={phraseLogic}>
            {children}
        </PhrasesContext.Provider>
    )
}


