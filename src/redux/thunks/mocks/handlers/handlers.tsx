import { rest } from "msw";

export const mockTokenKey = "KJASDH123JK21H3K1JH3KJ2H13KAJ";

const mockAstros = [
  {
    assembled: false,
    framework: "React",
    idRender: "812736SJDGHA",
    id: "812736SJDGHA",
    image:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
    name: "REACT ASTRO",
    partimage:
      "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
    type: "Astro",
  },
];

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/register`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}astros`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mockAstros))
  ),
  rest.get(`${process.env.REACT_APP_API_URL}astroparts`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json([]))
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}inventory/812736SJDGHA`,
    (_, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          perfect: [
            {
              parts: {
                astro: {
                  id: "62974453ec4b32f200362337",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                },
                naut: {
                  id: "62974453ec4b32f200362338",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_NAUT_2.png?alt=media&token=fe08c83e-7b76-4e11-85cc-7d46e4b3039e",
                },
                rocket: {
                  id: "62974453ec4b32f200362339",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                },
              },
              idRender: "#612736SJDGHD",
              name: "JQUERY PERFECT ASTRO",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "JQuery",
              assembled: false,
              id: "629e514d85d60f0e2f74ec4e",
            },
          ],
          part: [],
        })
      )
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}astros/812736SJDGHA`,
    (_, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json({
          assembled: false,
          framework: "React",
          idRender: "812736SJDGHA",
          id: "812736SJDGHA",
          image:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
          name: "REACT ASTRO",
          partimage:
            "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
          type: "Astro",
        })
      )
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}inventory/:idUser/:inventoryKey/:idItemToRemove`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          perfect: [
            {
              parts: {
                astro: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                  id: "629e513c85d60f0e2f74ec46",
                },
                naut: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  id: "629e513c85d60f0e2f74ec44",
                },
                rocket: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                  id: "629e513c85d60f0e2f74ec48",
                },
              },
              idRender: "#1654695535015",
              name: "UPDATED",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0a671495121880f2e4f81",
            },
            {
              parts: {
                astro: {
                  id: "629e513c85d60f0e2f74ec3d",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
                },
                naut: {
                  id: "629e513c85d60f0e2f74ec44",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                },
                rocket: {
                  id: "629e513c85d60f0e2f74ec48",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                },
              },
              idRender: "#1654710621322",
              name: "PORVA",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0e15ea6cbd4a48610a87d",
            },
          ],
          part: [
            {
              idRender: "#812736SJDGHA",
              name: "REACT ASTRO",
              type: "Astro",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
              id: "629e513c85d60f0e2f74ec3d",
            },
            {
              idRender: "#812736SJDGHB",
              name: "REACT NAUT",
              type: "Naut",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
              id: "629e513c85d60f0e2f74ec3e",
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
          ],
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}inventory/:idUser/:inventoryKey/:idItemToAdd`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          perfect: [
            {
              parts: {
                astro: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                  id: "629e513c85d60f0e2f74ec46",
                },
                naut: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  id: "629e513c85d60f0e2f74ec44",
                },
                rocket: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                  id: "629e513c85d60f0e2f74ec48",
                },
              },
              idRender: "#1654695535015",
              name: "UPDATED",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0a671495121880f2e4f81",
            },
            {
              parts: {
                astro: {
                  id: "629e513c85d60f0e2f74ec3d",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
                },
                naut: {
                  id: "629e513c85d60f0e2f74ec44",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                },
                rocket: {
                  id: "629e513c85d60f0e2f74ec48",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                },
              },
              idRender: "#1654710621322",
              name: "PORVA",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0e15ea6cbd4a48610a87d",
            },
          ],
          part: [
            {
              idRender: "#812736SJDGHA",
              name: "REACT ASTRO",
              type: "Astro",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
              id: "629e513c85d60f0e2f74ec3d",
            },
            {
              idRender: "#812736SJDGHB",
              name: "REACT NAUT",
              type: "Naut",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
              id: "629e513c85d60f0e2f74ec3e",
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
          ],
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}inventory/:idUser`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          perfect: [
            {
              parts: {
                astro: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                  id: "629e513c85d60f0e2f74ec46",
                },
                naut: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  id: "629e513c85d60f0e2f74ec44",
                },
                rocket: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                  id: "629e513c85d60f0e2f74ec48",
                },
              },
              idRender: "#1654695535015",
              name: "UPDATED",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0a671495121880f2e4f81",
            },
            {
              parts: {
                astro: {
                  id: "629e513c85d60f0e2f74ec3d",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
                },
                naut: {
                  id: "629e513c85d60f0e2f74ec44",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                },
                rocket: {
                  id: "629e513c85d60f0e2f74ec48",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                },
              },
              idRender: "#1654710621322",
              name: "PORVA",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0e15ea6cbd4a48610a87d",
            },
          ],
          part: [
            {
              idRender: "#812736SJDGHA",
              name: "REACT ASTRO",
              type: "Astro",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
              id: "629e513c85d60f0e2f74ec3d",
            },
            {
              idRender: "#812736SJDGHB",
              name: "REACT NAUT",
              type: "Naut",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
              id: "629e513c85d60f0e2f74ec3e",
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
          ],
        })
      );
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}inventory/:idUser/:idItemToEdit`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          perfect: [
            {
              parts: {
                astro: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ASTRO_2.png?alt=media&token=dcc70891-716c-4617-be9f-cff8adfd803a",
                  id: "629e513c85d60f0e2f74ec46",
                },
                naut: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                  id: "629e513c85d60f0e2f74ec44",
                },
                rocket: {
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                  id: "629e513c85d60f0e2f74ec48",
                },
              },
              idRender: "#1654695535015",
              name: "UPDATED",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0a671495121880f2e4f81",
            },
            {
              parts: {
                astro: {
                  id: "629e513c85d60f0e2f74ec3d",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
                },
                naut: {
                  id: "629e513c85d60f0e2f74ec44",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/ANGULAR_NAUT_2.png?alt=media&token=2adf0349-1c43-4880-a10e-a205a4744971",
                },
                rocket: {
                  id: "629e513c85d60f0e2f74ec48",
                  image:
                    "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/JQUERY_ROCKET_2.png?alt=media&token=b24b0696-d81e-4348-b7d2-c487bb2045f0",
                },
              },
              idRender: "#1654710621322",
              name: "PORVA",
              type: "Perfect Astro",
              flighthistory: false,
              stickers: 1,
              framework: "Mutant Astro",
              assembled: true,
              id: "62a0e15ea6cbd4a48610a87d",
            },
          ],
          part: [
            {
              idRender: "#812736SJDGHA",
              name: "REACT ASTRO",
              type: "Astro",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO.png?alt=media&token=8934e3f3-8e42-4ddd-8dec-9fe74acc6c47",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_ASTRO_2.png?alt=media&token=7e1ef3af-b744-4d81-9c44-20346c04977e",
              id: "629e513c85d60f0e2f74ec3d",
            },
            {
              idRender: "#812736SJDGHB",
              name: "REACT NAUT",
              type: "Naut",
              framework: "React",
              assembled: false,
              image:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT.png?alt=media&token=b4ca79a2-7a99-4674-93d2-78a2bba4322f",
              partimage:
                "https://firebasestorage.googleapis.com/v0/b/astro-factory.appspot.com/o/REACT_NAUT_2.png?alt=media&token=b7217d8c-f46c-422b-a2a4-827f89116a00",
              id: "629e513c85d60f0e2f74ec3e",
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
          ],
        })
      );
    }
  ),
];
