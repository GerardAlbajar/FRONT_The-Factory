import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Header Component", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a Header Component with five list items", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader.length).toBe(5);
    });
  });
});

describe("Given the AstroPart Component", () => {
  describe("When a user enters its username and password and submit the form", () => {
    test("Then it should call the dispatch action with its credentials", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const expectedClick: HTMLButtonElement = screen.getByRole("link", {
        name: "Log Out",
      });
      userEvent.click(expectedClick);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
