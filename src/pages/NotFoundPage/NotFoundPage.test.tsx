import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the HomePage component with two buttons elements", () => {
      const expectedText = "Page Not Found";

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const selectedText = screen.getByText(expectedText);

      expect(selectedText).toBeInTheDocument();
    });
  });
});
