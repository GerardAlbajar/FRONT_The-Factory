import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Login from "./LogInForm";

describe("Given the LogInForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one 'Username' label", () => {
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });

    test("Then it should render a button", () => {
      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When the word 'hola' is written to the name input field", () => {
    test("Then the value of the Username input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Username"), inputText);
      expect(screen.getByLabelText("Username")).toHaveValue(inputText);
    });

    test("Then the value of the Password input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <Login />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Password"), inputText);
      expect(screen.getByLabelText("Password")).toHaveValue(inputText);
    });
  });
});
