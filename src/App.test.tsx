import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";
const { render, screen } = require("@testing-library/react");

describe("Given the App Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a page with a Header component", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const totalList = screen.getAllByRole("heading");

      expect(totalList.length).toBe(1);
    });
  });
});
