import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import UsersPage from "./UsersPage";
const { render, screen } = require("@testing-library/react");

describe("Given a UsersPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one number of headings", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <UsersPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByRole("heading")).toHaveLength(1);
    });
  });
});
