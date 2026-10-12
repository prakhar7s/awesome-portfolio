import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio brand name", () => {
  render(<App />);
  expect(screen.getAllByText(/Prakhar Shrivastava/i).length).toBeGreaterThan(0);
});
