import { render, screen } from "@testing-library/react";
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
});
