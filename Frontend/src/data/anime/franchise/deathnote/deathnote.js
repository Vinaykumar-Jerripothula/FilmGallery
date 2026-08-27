import deathnotestorywatchorderBanner from "../../../../images/anime/franchise/deathnote/deathnotestorywatchorderBanner.jpeg";
import deathnotemoviesBanner from "../../../../images/anime/franchise/deathnote/deathnotemoviesBanner.jpeg";
import deathnotespecialsBanner from "../../../../images/anime/franchise/deathnote/deathnotespecialsBanner.jpeg";
import deathnoteovaBanner from "../../../../images/anime/franchise/deathnote/deathnoteovaBanner.jpeg";

export const deathNote = {
  title: "Death Note",
  subtitle: "Anime Franchise",
  contentId: "deathnote",
  isHub: true,

  content: [
    {
      id: 1,
      image: deathnotestorywatchorderBanner,
      title: "Story Watch Order",
      slug: "deathnote-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: deathnotemoviesBanner,
      title: "Movies",
      slug: "deathnote-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: deathnotespecialsBanner,
      title: "Specials",
      slug: "deathnote-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: deathnoteovaBanner,
      title: "OVAs",
      slug: "deathnote-ovas",
      lockEnabled: false,
    },
  ],
};