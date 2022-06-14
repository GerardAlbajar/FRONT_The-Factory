import { IUser } from "../../types/types";
import usersReducer, { loadUsersActionCreator } from "./usersSlice";

describe("Given a usersSlice reducer", () => {
  describe("When it receives a list of Users", () => {
    test("Then it should return/update the new state with this list", () => {
      const initialUsers: IUser[] = [];

      const expectedUsers: IUser[] = [
        {
          inventory: {
            perfect: [
              {
                parts: {
                  astro: {
                    id: "62974453ec4b32f20036232e",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
                  },
                  naut: {
                    id: "62974453ec4b32f20036232f",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
                  },
                  rocket: {
                    id: "62974453ec4b32f200362330",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ROCKET_2.png?alt=media&token=d1ec2544-86ed-493c-81f2-629fa6f30abb",
                  },
                },
                idRender: "#612736SJDGHA",
                name: "REACT PERFECT ASTRO",
                type: "Perfect Astro",
                flighthistory: false,
                stickers: 1,
                framework: "React",
                assembled: false,
                id: "629e514d85d60f0e2f74ec4b",
              },
              {
                parts: {
                  astro: {
                    id: "62974453ec4b32f200362334",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ASTRO_2.png?alt=media&token=0f01579c-7fe2-4c36-9f37-da72c93b2800",
                  },
                  naut: {
                    id: "62974453ec4b32f200362335",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  },
                  rocket: {
                    id: "62974453ec4b32f200362336",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
                  },
                },
                idRender: "#612736SJDGHC",
                name: "ANGULAR PERFECT ASTRO",
                type: "Perfect Astro",
                flighthistory: false,
                stickers: 1,
                framework: "Angular",
                assembled: false,
                id: "629e514d85d60f0e2f74ec4d",
              },
              {
                parts: {
                  astro: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                    id: "629e513c85d60f0e2f74ec46",
                  },
                  naut: {
                    id: "629e513c85d60f0e2f74ec41",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6",
                  },
                  rocket: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
                    id: "629e513c85d60f0e2f74ec45",
                  },
                },
                idRender: "#1654645428894",
                name: "GFHGFH",
                type: "Perfect Astro",
                flighthistory: false,
                stickers: 1,
                framework: "Mutant Astro",
                assembled: true,
                id: "629fe2b8e921f0e2a4e26a18",
              },
              {
                parts: {
                  astro: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO_2.png?alt=media&token=38211c53-319e-44d3-a007-cdecb9853c91",
                    id: "629e513c85d60f0e2f74ec40",
                  },
                  naut: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
                    id: "629e513c85d60f0e2f74ec3e",
                  },
                  rocket: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
                    id: "629e513c85d60f0e2f74ec45",
                  },
                },
                idRender: "#1654702019956",
                name: "TITO",
                type: "Perfect Astro",
                flighthistory: false,
                stickers: 1,
                framework: "Mutant Astro",
                assembled: true,
                id: "62a0bfc63b0281d7fbd9a727",
              },
              {
                parts: {
                  astro: {
                    id: "629e513c85d60f0e2f74ec40",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO_2.png?alt=media&token=38211c53-319e-44d3-a007-cdecb9853c91",
                  },
                  naut: {
                    id: "629e513c85d60f0e2f74ec44",
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  },
                  rocket: {
                    image:
                      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
                    id: "629e513c85d60f0e2f74ec45",
                  },
                },
                idRender: "#1654703294608",
                name: "LUIS UPDATED",
                type: "Perfect Astro",
                flighthistory: false,
                stickers: 1,
                framework: "Mutant Astro",
                assembled: true,
                id: "62a0c4bf3b0281d7fbd9d8e4",
              },
            ],
            part: [
              {
                idRender: "#812736SJDGHC",
                name: "REACT ROCKET",
                type: "Rocket",
                framework: "React",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ROCKET.png?alt=media&token=995e1f59-1906-4c45-8813-25563b814f6a",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ROCKET_2.png?alt=media&token=d1ec2544-86ed-493c-81f2-629fa6f30abb",
                id: "629e513c85d60f0e2f74ec3f",
              },
              {
                idRender: "#912736SJDGHB",
                name: "VUE NAUT",
                type: "Naut",
                framework: "Vue",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT.png?alt=media&token=4b03982b-30c6-47e7-aa2d-0600ee3972e8",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_NAUT_2.png?alt=media&token=cd6e0919-c30d-497d-8c20-8bcf55e9cfc6",
                id: "629e513c85d60f0e2f74ec41",
              },
              {
                idRender: "#212736SJDGHC",
                name: "JQUERY ROCKET",
                type: "Rocket",
                framework: "JQuery",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET.png?alt=media&token=d0989207-5df5-4a43-91d4-e904bbdee1de",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                id: "629e513c85d60f0e2f74ec48",
              },
              {
                idRender: "#912736SJDGHA",
                name: "VUE ASTRO",
                type: "Astro",
                framework: "Vue",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO.png?alt=media&token=7cef6c2a-6169-470c-80b7-10e2a2a948f8",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/VUE_ASTRO_2.png?alt=media&token=38211c53-319e-44d3-a007-cdecb9853c91",
                id: "629e513c85d60f0e2f74ec40",
              },
              {
                idRender: "#212736SJDGHA",
                name: "JQUERY ASTRO",
                type: "Astro",
                framework: "JQuery",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO.png?alt=media&token=5314d5ea-94ef-41ae-8238-5e38879ffd08",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                id: "629e513c85d60f0e2f74ec46",
              },
              {
                idRender: "#112736SJDGHC",
                name: "ANGULAR ROCKET",
                type: "Rocket",
                framework: "Angular",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET.png?alt=media&token=9a7568ac-361a-43c9-8941-d310281f54e4",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_ROCKET_2.png?alt=media&token=4d732a01-6f67-4793-8a10-655659f39937",
                id: "629e513c85d60f0e2f74ec45",
              },
              {
                idRender: "#112736SJDGHB",
                name: "ANGULAR NAUT",
                type: "Naut",
                framework: "Angular",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT.png?alt=media&token=bea70d12-3e3f-4dcf-aac6-d5303d0bdb23",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                id: "629e513c85d60f0e2f74ec44",
              },
              {
                idRender: "#212736SJDGHB",
                name: "JQUERY NAUT",
                type: "Naut",
                framework: "JQuery",
                assembled: false,
                image:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_NAUT.png?alt=media&token=2f6d5853-2681-49fb-8469-bf695994f091",
                partimage:
                  "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_NAUT_2.png?alt=media&token=fe08c83e-7b76-4e11-85cc-7d46e4b3039e",
                id: "629e513c85d60f0e2f74ec47",
              },
            ],
          },
          name: "gerard",
          mail: "gerard@gerard.com",
          username: "gerard",
          id: "6294eeb64326e4549274b515",
        },
      ];

      const action = loadUsersActionCreator(expectedUsers);
      const loadedUsers = usersReducer(initialUsers, action);

      expect(loadedUsers).toEqual(expectedUsers);
    });
  });
});
