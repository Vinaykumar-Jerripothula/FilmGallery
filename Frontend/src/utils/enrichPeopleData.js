import { peopleData } from "../data/people/peopleData";
import { generateContentId } from "./generateContentId";

export const enrichedPeopleData = {
  directors: {},
  actors: {},
};

Object.entries(peopleData.directors).forEach(
  ([key, director]) => {
    enrichedPeopleData.directors[key] = {
      ...director,

      movies: director.movies.map((movie) => ({
        ...movie,

        contentId: generateContentId(movie),
      })),
    };
  },
);

Object.entries(peopleData.actors).forEach(
  ([key, actor]) => {
    enrichedPeopleData.actors[key] = {
      ...actor,

      movies: actor.movies.map((movie) => ({
        ...movie,

        contentId: generateContentId(movie),
      })),
    };
  },
);