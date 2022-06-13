import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockAstros } from "../../mocks/astros";
import store from "../../redux/store/store";
import AstrosList from "./AstrosList";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Given a RobotList component function", () => {
  describe("When invoked with a list of 2 astros", () => {
    test("Then it should render 8 li elements", () => {
      const astros: any = mockAstros;
      const expectedNumberOfAstros = 8;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AstrosList astros={astros} />
          </Provider>
        </BrowserRouter>
      );

      const liElements = screen.getAllByRole("listitem");

      expect(liElements).toHaveLength(expectedNumberOfAstros);
    });
  });
});
