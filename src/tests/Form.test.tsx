import { fireEvent, render, screen } from "@testing-library/react";
import FormContainer from "../components/FormContainer";
import { PhrasesContext } from "../context/PhrasesContext";

describe("FormContainer Component", () => {
  it("permite al usuario escribir una frase", () => {
    const mockSetNewPhrase = jest.fn();

    render(
      <PhrasesContext.Provider
        value={{
          newPhrase: "",
          setNewPhrase: mockSetNewPhrase,
          addPhrase: jest.fn(),
          deletePhrase: jest.fn(),
          phrases: [],
          filteredPhrases: [],
          searchTerm: "",
          setSearchTerm: jest.fn(),
          error: "",
        }}
      >
        <FormContainer />
      </PhrasesContext.Provider>
    );

    const input = screen.getByPlaceholderText("Ingrese una nueva frase");
    fireEvent.change(input, { target: { value: "Frase test" } });

    expect(mockSetNewPhrase).toHaveBeenCalledWith("Frase test");
  });

  it("llama a `addPhrase` cuando se envía el formulario", () => {
    const mockAddPhrase = jest.fn();

    render(
      <PhrasesContext.Provider
        value={{
          newPhrase: "",
          setNewPhrase: jest.fn(),
          addPhrase: mockAddPhrase,
          deletePhrase: jest.fn(),
          phrases: [],
          filteredPhrases: [],
          searchTerm: "",
          setSearchTerm: jest.fn(),
          error: "",
        }}
      >
        <FormContainer />
      </PhrasesContext.Provider>
    );

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockAddPhrase).toHaveBeenCalledTimes(1);
  });
});
