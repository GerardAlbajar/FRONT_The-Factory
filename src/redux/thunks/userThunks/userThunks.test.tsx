import axios from "axios";
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

  describe("When invoked with a valid user and axios throws an error", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const navigate = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = logInUserThunk(
        {
          username: "hola",
          password: "",
        },
        navigate
      );
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When invoked with a valid user and axios throws an error while Signing Up", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const navigate = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = signUpUserThunk(
        {
          name: "",
          mail: "test",
          username: "",
          password: "test",
        },
        navigate
      );
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
