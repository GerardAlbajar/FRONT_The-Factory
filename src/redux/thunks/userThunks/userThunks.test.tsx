import { server } from "../mocks/server/server";
import { logInUserThunk, signUpUserThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "123" }));

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const thunk = logInUserThunk(
        { username: "hola", password: "hola" },
        navigate
      );
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When RegisterUserThunk is invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const thunk = signUpUserThunk(
        {
          name: "test",
          mail: "test",
          username: "test",
          password: "test",
        },
        navigate
      );
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
