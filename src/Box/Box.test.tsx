import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "./Box";

/**
 * Box component - testing
 */
describe("Box component", () => {
  it("Load component", () => {
    const text = "Hello World";
    render(<Box>{text}</Box>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
