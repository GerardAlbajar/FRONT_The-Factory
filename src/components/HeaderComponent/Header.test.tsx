import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a Header Component with five list items", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader.length).toBe(5);
    });
  });
});
