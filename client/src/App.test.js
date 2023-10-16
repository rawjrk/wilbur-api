import { screen, render } from "@testing-library/react";
import App from "./App";

test("should have the right message in the dom", () => {
  render(<App />);
  const message = "Hi, stranger!";
  expect(screen.getByText(message)).toBeInTheDocument();
});
