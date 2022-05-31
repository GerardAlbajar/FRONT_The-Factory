import { render, screen } from "@testing-library/react";
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
});
