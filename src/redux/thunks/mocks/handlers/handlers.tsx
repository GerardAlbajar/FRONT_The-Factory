import { rest } from "msw";

export const mockTokenKey = "KJASDH123JK21H3K1JH3KJ2H13KAJ";

const mockAstros = [
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
];
