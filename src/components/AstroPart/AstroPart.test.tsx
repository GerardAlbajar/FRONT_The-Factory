import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AstroPart from "./AstroPart";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the AstroPart Component", () => {
  describe("When a user enters its username and password and submit the form", () => {
    test("Then it should call the dispatch action with its credentials", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <AstroPart
              name="hola"
              id="hola"
              idRender="hola"
              image="hola"
              showIcon={true}
              key="hola"
            />
          </BrowserRouter>
        </Provider>
      );

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Remove",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
