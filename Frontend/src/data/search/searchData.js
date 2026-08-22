import { contentRegistry } from "../Collection/contentRegistry";
import { peopleData } from "../people/peopleData";
import { enrichedPeopleData } from "../../utils/enrichPeopleData";
import { allContentItems } from "../Collection/allContentItems";

const collectionSearchItems = Object.values(contentRegistry).flatMap(
  (collection) => [
    {
      title: collection.title,
      contentId: collection.contentId,
      type: "collection",
      collectionTitle: collection.title,
    },

    ...collection.content.map((item) => ({
      title: item.title,
      contentId: collection.contentId,
      type: "collection",
      collectionTitle: collection.title,
    })),
  ],
);

const movieItems = allContentItems.map((movie) => ({
  title: movie.title,
  contentId: movie.contentId,
  type: "movie",
}));

const directorMovieItems = Object.values(enrichedPeopleData.directors).flatMap(
  (director) =>
    director.movies.map((movie) => ({
      title: movie.title,
      contentId: movie.contentId,
      type: "movie",
    })),
);

const actorMovieItems = Object.values(enrichedPeopleData.actors).flatMap(
  (actor) =>
    actor.movies.map((movie) => ({
      title: movie.title,
      contentId: movie.contentId,
      type: "movie",
    })),
);

const actorNameItems = Object.values(peopleData.actors).map((actor) => ({
  title: actor.name,
  type: "actor",
}));

const directorNameItems = Object.values(peopleData.directors).map(
  (director) => ({
    title: director.name,
    type: "director",
  }),
);
export const searchData = [
  ...new Map(
    [
      ...collectionSearchItems,
      ...movieItems,
      ...actorNameItems,
      ...directorNameItems,
    ].map((item) => [item.title.toLowerCase(), item]),
  ).values(),
];

console.log(searchData);

console.log(
  "THOR IN ALLCONTENTITEMS",
  allContentItems.find((item) => item.title === "Thor"),
);

console.log(
  "THOR IN SEARCHDATA",
  searchData.find((item) => item.title === "Thor"),
);
