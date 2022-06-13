import uiReducer, {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When it receives a loaded off action", () => {
    test("Then it should switch the state to false", () => {
      const initialState = {
        loaded: true,
      };
      const expectedState = { loaded: false };

      const loadOffAction = loadedOffActionCreator();
      const loadedOff = uiReducer(initialState, loadOffAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });

  describe("When it receives a loaded on action", () => {
    test("Then it should switch the state to true", () => {
      const initialState = {
        loaded: false,
      };
      const expectedState = { loaded: true };

      const loadOnAction = loadedOnActionCreator();
      const loadedOff = uiReducer(initialState, loadOnAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });
});
