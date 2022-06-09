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
});
