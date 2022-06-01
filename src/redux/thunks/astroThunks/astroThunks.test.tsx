import { loadAstrosThunk } from "./astroThunks";
import { server } from "../mocks/server/server";
import { loadAstrosActionCreator } from "../../features/astroSlice";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadAstrosThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadAstrosActionCreator with api's data", async () => {
      const dispatch = jest.fn();
      const expectedData = [
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

      const expectedAction = loadAstrosActionCreator(expectedData);

      const thunk = loadAstrosThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
