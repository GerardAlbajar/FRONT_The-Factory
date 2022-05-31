import LogInPage from "./LogInPage";
const { render, screen } = require("@testing-library/react");

describe("Given a LogInPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the LogInPage component with two buttons elements", () => {
      render(<LogInPage />);

      const expectedNumberOfButtons = 3;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });

    test("Then it should render one 'Username' label", () => {
      render(<LogInPage />);

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(<LogInPage />);

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });
  });
});
