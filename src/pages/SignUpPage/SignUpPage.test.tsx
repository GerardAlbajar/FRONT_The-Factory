import SignUpPage from "./SignUpPage";
const { render, screen } = require("@testing-library/react");

describe("Given a SignUpPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the SignUpPage component with two buttons elements", () => {
      render(<SignUpPage />);

      const expectedNumberOfButtons = 3;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });

    test("Then it should render one 'Username' label", () => {
      render(<SignUpPage />);

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(<SignUpPage />);

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });

    test("Then it should render one 'Mail' label", () => {
      render(<SignUpPage />);

      expect(screen.getAllByText("Mail")).toHaveLength(1);
    });

    test("Then it should render one 'Name' label", () => {
      render(<SignUpPage />);

      expect(screen.getAllByText("Name")).toHaveLength(1);
    });
  });
});
