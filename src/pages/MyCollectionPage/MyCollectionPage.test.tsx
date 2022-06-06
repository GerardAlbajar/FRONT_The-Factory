import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MyCollectionPage from "./MyCollectionPage";
const { render, screen } = require("@testing-library/react");

describe("Given a MyCollectionPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render four number of headings", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <MyCollectionPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByRole("heading")).toHaveLength(1);
    });
  });
});
