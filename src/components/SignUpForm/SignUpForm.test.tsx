import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import SignUpForm from "./SignUpForm";

describe("Given the SignUpForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one 'Name' label", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      expect(screen.getAllByText("Name")).toHaveLength(1);
    });

    test("Then it should render one 'Mail' label", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      expect(screen.getAllByText("Mail")).toHaveLength(1);
    });

    test("Then it should render one 'Username' label", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });

    test("Then it should render a button", () => {
      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When the word 'hola' is written to the name input field", () => {
    test("Then the value of the Name input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Name"), inputText);
      expect(screen.getByLabelText("Name")).toHaveValue(inputText);
    });

    test("Then the value of the Mail input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Mail"), inputText);
      expect(screen.getByLabelText("Mail")).toHaveValue(inputText);
    });

    test("Then the value of the Username input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Username"), inputText);
      expect(screen.getByLabelText("Username")).toHaveValue(inputText);
    });

    test("Then the value of the Password input field should be 'hola'", () => {
      const inputText = "hola";

      render(
        <Provider store={store}>
          <SignUpForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText("Password"), inputText);
      expect(screen.getByLabelText("Password")).toHaveValue(inputText);
    });
  });
});
