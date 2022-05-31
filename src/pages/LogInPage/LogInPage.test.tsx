import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LogInPage from "./LogInPage";
const { render, screen } = require("@testing-library/react");

describe("Given a LogInPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the LogInPage component with two buttons elements", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LogInPage />
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
            <LogInPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LogInPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Password")).toHaveLength(1);
    });
  });
});
