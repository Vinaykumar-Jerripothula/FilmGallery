import dragonballstorywatchorderBanner from "../../../../images/anime/universe/dragonball/dragonballstorywatchorderBanner.jpeg";
import dragonballtvseriesBanner from "../../../../images/anime/universe/dragonball/dragonballtvseriesBanner.jpeg";
import dragonballmoviesBanner from "../../../../images/anime/universe/dragonball/dragonballmoviesBanner.jpeg";
import dragonballtvspecialsBanner from "../../../../images/anime/universe/dragonball/dragonballtvspecialsBanner.jpeg";
import dragonballovaBanner from "../../../../images/anime/universe/dragonball/dragonballovaBanner.jpeg";
import dragonballonaBanner from "../../../../images/anime/universe/dragonball/dragonballonaBanner.jpeg";
import dragonballshortsBanner from "../../../../images/anime/universe/dragonball/dragonballshortsBanner.jpeg";

export const dragonBall = {
  title: "Dragon Ball",
  type: "Universe",
  subtitle: "Anime Universe",
  contentId: "dragonball",
  isHub: true,

  content: [
    {
      id: 1,
      image: dragonballstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "dragonball-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: dragonballtvseriesBanner,
      title: "TV Series",
      slug: "dragonball-tv-series",
      lockEnabled: false,
    },

    {
      id: 3,
      image: dragonballmoviesBanner,
      title: "Movies",
      slug: "dragonball-movies",
      lockEnabled: false,
    },

    {
      id: 4,
      image: dragonballtvspecialsBanner,
      title: "TV Specials",
      slug: "dragonball-tv-specials",
      lockEnabled: false,
    },

    {
      id: 5,
      image: dragonballovaBanner,
      title: "OVAs",
      slug: "dragonball-ovas",
      lockEnabled: false,
    },

    {
      id: 6,
      image: dragonballonaBanner,
      title: "ONAs",
      slug: "dragonball-onas",
      lockEnabled: false,
    },

    {
      id: 7,
      image: dragonballshortsBanner,
      title: "Shorts",
      slug: "dragonball-shorts",
      lockEnabled: false,
    },
  
  ],
};