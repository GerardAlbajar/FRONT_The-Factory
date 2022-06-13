import axios from "axios";
import { server } from "../mocks/server/server";
import { loadEditAstroThunk } from "./editThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadUserCollectionThunk function", () => {
  describe("When it is called", () => {
    test("It should call the dispatch method with api's data", async () => {
      const dispatch = jest.fn();

      const thunk = loadEditAstroThunk("812736SJDGHA");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with a valid user and axios throws an error while Signing Up", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = loadEditAstroThunk("897213");
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
