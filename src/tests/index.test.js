import { render, screen } from "@testing-library/react";
import App from "../../pages/index";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next App with Test Procedure" })
    ).toBeInTheDocument();
  });
});