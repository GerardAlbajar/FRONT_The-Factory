import { Astro, EditAstroState } from "../../types/types";
import editReducer, {
  blankStateActionCreator,
  loadEditAstroActionCreator,
} from "./editSlice";

describe("Given a astroSlice reducer", () => {
  describe("When it receives a list of Astros", () => {
    test("Then it should return/update the new state with this list", () => {
      const initialState: EditAstroState = {
        astro: {
          id: "",
          idRender: "",
          name: "",
          type: "",
          flighthistory: 0,
          stickers: 1,
          framework: "",
          assembled: false,
          parts: {
            astro: {
              id: "",
              idRender: "",
              image: "",
            },
            naut: {
              id: "",
              idRender: "",
              image: "",
            },
            rocket: {
              id: "",
              idRender: "",
              image: "",
            },
          },
        },
      };

      const astroGiven: Astro = {
        id: "test",
        idRender: "test",
        name: "test",
        type: "test",
        flighthistory: 0,
        stickers: 1,
        framework: "test",
        assembled: false,
        parts: {
          astro: {
            id: "test",
            idRender: "test",
            image: "test",
          },
          naut: {
            id: "test",
            idRender: "test",
            image: "test",
          },
          rocket: {
            id: "test",
            idRender: "test",
            image: "test",
          },
        },
      };

      const expectedResult: EditAstroState = {
        astro: {
          id: "test",
          idRender: "test",
          name: "test",
          type: "test",
          flighthistory: 0,
          stickers: 1,
          framework: "test",
          assembled: false,
          parts: {
            astro: {
              id: "test",
              idRender: "test",
              image: "test",
            },
            naut: {
              id: "test",
              idRender: "test",
              image: "test",
            },
            rocket: {
              id: "test",
              idRender: "test",
              image: "test",
            },
          },
        },
      };

      const action = loadEditAstroActionCreator(astroGiven);
      const loadedAstros = editReducer(initialState, action);

      expect(loadedAstros).toEqual(expectedResult);
    });
  });
});

describe("Given a blankState reducer", () => {
  describe("When it receives a state and a blankState", () => {
    test("Then it should return the initial pizzeria state", () => {
      const initialState: EditAstroState = {
        astro: {
          id: "test",
          idRender: "test",
          name: "test",
          type: "test",
          flighthistory: 0,
          stickers: 1,
          framework: "test",
          assembled: false,
          parts: {
            astro: {
              id: "test",
              idRender: "test",
              image: "test",
            },
            naut: {
              id: "test",
              idRender: "test",
              image: "test",
            },
            rocket: {
              id: "test",
              idRender: "test",
              image: "test",
            },
          },
        },
      };

      const expectedState: EditAstroState = {
        astro: {
          id: "",
          idRender: "",
          name: "",
          type: "",
          flighthistory: 0,
          stickers: 1,
          framework: "",
          assembled: false,
          parts: {
            astro: {
              id: "",
              idRender: "",
              image: "",
            },
            naut: {
              id: "",
              idRender: "",
              image: "",
            },
            rocket: {
              id: "",
              idRender: "",
              image: "",
            },
          },
        },
      };

      const blankStateAction = blankStateActionCreator();
      const editReducerStatus = editReducer(initialState, blankStateAction);

      expect(editReducerStatus).toEqual(expectedState);
    });
  });
});
