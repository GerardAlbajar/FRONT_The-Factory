import { render, screen } from "@testing-library/react";
import Login from "./LogInForm";

describe("Given the LogInForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one 'Username' label", () => {
      render(<Login />);

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });
  });
});
