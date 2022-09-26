import { rest } from "msw";
import imdb from "./sample_data/imdb.json";

export const handlersIMDB = [
  rest.get(
    `https://imdb8.p.rapidapi.com/auto-complete?q=*`,
    (req, res, ctx) => {
      return res(ctx.json(imdb));
    }
  ),
];
