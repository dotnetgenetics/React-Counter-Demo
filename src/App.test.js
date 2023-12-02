import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading", () => {
  render(<App />);
  const count = screen.getByRole("heading");
  expect(count).toBeInTheDocument();
});

test("renders plus button", () => {
  render(<App />);
  const plusButton = screen.getByRole("button", { name: "+1" });
  expect(plusButton).toBeInTheDocument();
});

test("renders subtract button", () => {
  render(<App />);
  const plusButton = screen.getByText("-1");
  expect(plusButton).toBeInTheDocument();
});
