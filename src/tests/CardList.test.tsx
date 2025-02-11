import { render, screen  } from "@testing-library/react";
import CardList from "../components/CardList";

describe("Form Container Component", () => {
  it("Crea correctamente la tarjeta con la nueva frase", () => {
    render(<CardList filteredPhrases={[]} deletePhrase={jest.fn()} />);
    expect(screen.getByText("No se encontró una frase")).toBeInTheDocument();
  });

  it("renderiza correctamente la lista de frases", () => {
    const mockPhrases = ["Testing de frases", "Testing de frases 2"];
    render(<CardList filteredPhrases={mockPhrases} deletePhrase={jest.fn()} />);

    expect(screen.getByText("Testing de frases")).toBeInTheDocument();
    expect(screen.getByText("Testing de frases 2")).toBeInTheDocument();
  });
});
