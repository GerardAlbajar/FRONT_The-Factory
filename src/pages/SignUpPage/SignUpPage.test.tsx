import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import SignUpPage from "./SignUpPage";
const { render, screen } = require("@testing-library/react");

describe("Given a SignUpPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the SignUpPage component with two buttons elements", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedNumberOfButtons = 3;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });

    test("Then it should render one 'Username' label", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });

    test("Then it should render one 'Mail' label", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Mail")).toHaveLength(1);
    });

    test("Then it should render one 'Name' label", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SignUpPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Name")).toHaveLength(1);
    });
  });
});
