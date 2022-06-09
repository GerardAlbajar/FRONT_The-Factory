import { rest } from "msw";
import responseMock from "../../../../mocks/responseMock";

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
      return res(ctx.status(200), ctx.json(responseMock));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}inventory/:idUser/:inventoryKey/:idItemToAdd`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(responseMock));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}inventory/:idUser`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(responseMock));
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_URL}inventory/:idUser/:idItemToEdit`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(responseMock));
    }
  ),
];
