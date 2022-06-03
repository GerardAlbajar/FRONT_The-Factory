import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AstrosPage from "./AstrosPage";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render four number of headings", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <AstrosPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByRole("heading")).toHaveLength(1);
    });
  });
});
