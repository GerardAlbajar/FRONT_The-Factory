import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import User from "./User";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the User Component", () => {
  describe("When it receives its props", () => {
    test("Then it should render nine listitems", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <User
              id="hola"
              inventory={{
                perfect: [
                  {
                    parts: {
                      rocket: {
                        id: "string",
                        idRender: "string",
                        image: "string",
                      },
                      astro: {
                        id: "string",
                        idRender: "string",
                        image: "string",
                      },
                      naut: {
                        id: "string",
                        idRender: "string",
                        image: "string",
                      },
                    },
                    id: "string",
                    idRender: "string",
                    name: "string",
                    type: "string",
                    flighthistory: true,
                    stickers: 1,
                    framework: "string",
                    assembled: true,
                  },
                ],
                part: [
                  {
                    id: "string",
                    idRender: "string",
                    name: "string",
                    type: "string",
                    framework: "string",
                    assembled: true,
                    image: "string",
                    partimage: "string",
                  },
                ],
              }}
              mail="hola"
              name="hola"
              username="hola"
            ></User>
          </BrowserRouter>
        </Provider>
      );
      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader.length).toBe(9);
    });
  });
});
