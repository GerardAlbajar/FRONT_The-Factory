import HomePage from "./HomePage";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the HomePage component with two buttons elements", () => {
      render(<HomePage />);

      const expectedNumberOfButtons = 2;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedNumberOfButtons);
    });
  });
});
