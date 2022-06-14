import toast from "react-hot-toast";
import { server } from "../mocks/server/server";
import { loadUsersThunk } from "./usersThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

toast.error = jest.fn();

describe("Given a loadAstrosThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadAstrosActionCreator with api's data", async () => {
      const dispatch = jest.fn();

      const thunk = loadUsersThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
