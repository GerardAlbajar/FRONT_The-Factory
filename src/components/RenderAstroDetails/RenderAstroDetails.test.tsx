import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RenderAstroDetails from "./RenderAstroDetails";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the RenderAstroDetails Component", () => {
  describe("When a user clicks the button with 'Add Item' text", () => {
    test("Then it should call the dispatch action with its credentials", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RenderAstroDetails
              name="hola"
              id="hola"
              idRender="hola"
              assembled={false}
              framework="hola"
              type="hola"
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
        name: "Add Item",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });

    test("KASJDLKASD", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RenderAstroDetails
              name="hola"
              id="hola"
              idRender="hola"
              assembled={false}
              flighthistory={1}
              framework="hola"
              stickers={1}
              type="hola"
              key="hola"
              parts={{
                rocket: undefined,
                astro: undefined,
                naut: undefined,
              }}
            />
          </BrowserRouter>
        </Provider>
      );

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Add Item",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
