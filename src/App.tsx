import { lazy, Suspense } from "react";
import { MessageCard } from "./components/ui/MessageCard";
import { usePhrases } from "./context/PhrasesContext";
import FormContainer from "./components/FormContainer";
import Filter from "./components/Filter";

export default function PhrasesMatrix() {
  const { filteredPhrases, deletePhrase } = usePhrases();

  const CardList = lazy(() => import("./components/CardList"));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frases React APP</h1>
      <FormContainer />
      <Filter />
      <Suspense fallback={<MessageCard message="Cargando frases..." />}>
        <CardList
          filteredPhrases={filteredPhrases}
          deletePhrase={deletePhrase}
        />
      </Suspense>
    </div>
  );
}
