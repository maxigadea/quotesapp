import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../components/ui/Card";


describe("Card Component", () => {
  it("muestra la frase correctamente", () => {
    render(<Card index={0} phrase="Testing de frases" onClick={jest.fn()} />);
    expect(screen.getByText("Testing de frases")).toBeInTheDocument();
  });

  it("ejecuta deletePhrase cuando se hace clic en una tarjeta", () => {
    const mockDelete = jest.fn();

    render(<Card index={0} phrase="Testing de frases" onClick={mockDelete} />);

    const deleteButton = screen.getByText("X"); // Obtiene el botón de eliminar
    fireEvent.click(deleteButton); // Simula clic en el botón

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
