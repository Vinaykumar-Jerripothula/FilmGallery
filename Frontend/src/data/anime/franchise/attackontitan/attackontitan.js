import attackontitanstorywatchorderBanner from "../../../../images/anime/franchise/attackontitan/attackontitanstorywatchorderBanner.jpeg";
import attackontitanmoviesBanner from "../../../../images/anime/franchise/attackontitan/attackontitanmoviesBanner.jpeg";
import attackontitanspecialsBanner from "../../../../images/anime/franchise/attackontitan/attackontitanspecialsBanner.jpeg";
import attackontitanovaBanner from "../../../../images/anime/franchise/attackontitan/attackontitanovaBanner.jpeg";

export const attackOnTitan = {
  title: "Attack on Titan",
  subtitle: "Anime Franchise",
  contentId: "attackontitan",
  isHub: true,

  content: [
    {
      id: 1,
      image: attackontitanstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "attackontitan-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: attackontitanmoviesBanner,
      title: "Movies",
      slug: "attackontitan-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: attackontitanspecialsBanner,
      title: "Specials",
      slug: "attackontitan-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: attackontitanovaBanner,
      title: "OVAs",
      slug: "attackontitan-ovas",
      lockEnabled: false,
    },
  ],
};