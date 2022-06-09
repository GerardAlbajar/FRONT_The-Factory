import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditMutantPage from "./EditMutantPage";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the AssembleMutantPage Component", () => {
  describe("When a user clicks the button with 'Add Item' text", () => {
    test("Then it should call the dispatch action with its credentials", () => {
      const formData = {
        mutantName: "test",
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditMutantPage />
          </BrowserRouter>
        </Provider>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Mutant Astro Name:",
      });
      userEvent.type(usernameInput, formData.mutantName);

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "EDIT YOUR MUTANT ASTRO",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
