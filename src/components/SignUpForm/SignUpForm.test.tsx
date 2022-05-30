import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("Given the SignUpForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one 'Name' label", () => {
      render(<SignUpForm />);

      expect(screen.getAllByText("Name")).toHaveLength(1);
    });

    test("Then it should render one 'Mail' label", () => {
      render(<SignUpForm />);

      expect(screen.getAllByText("Mail")).toHaveLength(1);
    });

    test("Then it should render one 'Username' label", () => {
      render(<SignUpForm />);

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(<SignUpForm />);

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });

    test("Then it should render a button", () => {
      render(<SignUpForm />);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
