import { Astro, AstroPart } from "../../types/types";
import astroReducer, { loadAstrosActionCreator } from "./astroSlice";

describe("Given a astroUser reducer", () => {
  describe("When it receives a list of Astros", () => {
    test("Then it should return/update the new state with this list", () => {
      const initialAstros: (Astro | AstroPart)[] = [];

      const expectedAstros = [
        {
          assembled: false,
          framework: "React",
          id: "812736SJDGHA",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
          name: "REACT ASTRO",
          partimage:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
          type: "Astro",
        },
      ];

      const action = loadAstrosActionCreator(expectedAstros);
      const loadedAstros = astroReducer(initialAstros, action);

      expect(loadedAstros).toEqual(expectedAstros);
    });
  });
});
