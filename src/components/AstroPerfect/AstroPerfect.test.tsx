import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AstroPerfect from "./AstroPerfect";

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
            <AstroPerfect
              name="hola"
              id="hola"
              idRender="hola"
              showIcon={true}
              key="hola"
              parts={{
                rocket: {
                  id: "hola",
                  idRender: "hola",
                  image: "hola",
                },
                astro: {
                  id: "hola",
                  idRender: "hola",
                  image: "hola",
                },
                naut: {
                  id: "hola",
                  idRender: "hola",
                  image: "hola",
                },
              }}
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
