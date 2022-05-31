import { BrowserRouter } from "react-router-dom";
import LogInPage from "./LogInPage";
const { render, screen } = require("@testing-library/react");

describe("Given a LogInPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the LogInPage component with two buttons elements", () => {
      render(
        <BrowserRouter>
          <LogInPage />
        </BrowserRouter>
      );

      const expectedNumberOfButtons = 3;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });

    test("Then it should render one 'Username' label", () => {
      render(
        <BrowserRouter>
          <LogInPage />
        </BrowserRouter>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(
        <BrowserRouter>
          <LogInPage />
        </BrowserRouter>
      );

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });
  });
});
