import { render, screen } from "@testing-library/react";
import LoggedChecker from "./LoggedChecker";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockLogged,
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to login enpoint when user is not logged", () => {
      render(
        <LoggedChecker>
          <h1>Hello</h1>
        </LoggedChecker>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });

    test("Then it should render its children when the user is logged", () => {
      mockLogged = true;

      const expectedHeaders = 1;

      render(
        <LoggedChecker>
          <h1>Hello</h1>
        </LoggedChecker>
      );

      const searchedText = screen.getAllByRole("heading");

      expect(mockUseNavigate).toHaveBeenCalled();
      expect(searchedText).toHaveLength(expectedHeaders);
    });
  });
});
