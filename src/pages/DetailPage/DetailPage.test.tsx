// import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { server } from "../../redux/thunks/mocks/server/server";
import DetailPage from "./DetailPage";
const { render, screen } = require("@testing-library/react");

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a DetailPage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render four number of headings", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByRole("link")).toHaveLength(6);
    });
  });
});
