import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RenderPartDetails from "./RenderPartDetails";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the RenderPartDetails Component", () => {
  describe("When a user clicks the button with 'Add Item' text", () => {
    test("Then it should call the dispatch action with its credentials", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RenderPartDetails
              name="hola"
              id="hola"
              idRender="hola"
              image="hola"
              key="hola"
              assembled={false}
              framework="hola"
              partimage="hola"
              type="hola"
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
