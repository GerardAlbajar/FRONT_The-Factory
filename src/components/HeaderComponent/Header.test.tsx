import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a Header Component with five list items", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader.length).toBe(5);
    });
  });
});
