import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import TheFactoryPage from "./TheFactoryPage";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the HomePage component with two buttons elements", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <TheFactoryPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedNumberOfButtons = 1;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });

    test("Then it should render one 'THE FACTORY' heading", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <TheFactoryPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("THE FACTORY")).toHaveLength(1);
    });

    test("Then it should render four number of headings", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <TheFactoryPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByRole("heading")).toHaveLength(4);
    });
  });
});
