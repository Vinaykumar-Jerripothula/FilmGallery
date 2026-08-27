import narutostorywatchorderBanner from "../../../../images/anime/universe/naruto/narutostorywatchorderBanner.jpeg";
import narutotvseriesBanner from "../../../../images/anime/universe/naruto/narutotvseriesBanner.jpeg";
import narutomoviesBanner from "../../../../images/anime/universe/naruto/narutomoviesBanner.jpeg";
import narutotvspecialsBanner from "../../../../images/anime/universe/naruto/narutotvspecialsBanner.jpeg";
import narutoovaBanner from "../../../../images/anime/universe/naruto/narutoovaBanner.jpeg";
import narutoonaBanner from "../../../../images/anime/universe/naruto/narutoonaBanner.jpeg";
import narutoshortsBanner from "../../../../images/anime/universe/naruto/narutoshortsBanner.jpeg";

export const naruto = {
  title: "Naruto",
  type: "Universe",
  category: "Anime Universe",
  contentId: "naruto",
  isHub: true,

  content: [
    {
      id: 1,
      image: narutostorywatchorderBanner,
      title: "Story Watch Order",
      slug: "naruto-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: narutotvseriesBanner,
      title: "TV Series",
      slug: "naruto-tv-series",
      lockEnabled: false,
    },

    {
      id: 3,
      image: narutomoviesBanner,
      title: "Movies",
      slug: "naruto-movies",
      lockEnabled: false,
    },

    {
      id: 4,
      image: narutotvspecialsBanner,
      title: "TV Specials",
      slug: "naruto-tv-specials",
      lockEnabled: false,
    },

    {
      id: 5,
      image: narutoovaBanner,
      title: "OVAs",
      slug: "naruto-ovas",
      lockEnabled: false,
    },

    {
      id: 6,
      image: narutoonaBanner,
      title: "ONAs",
      slug: "naruto-onas",
      lockEnabled: false,
    },

    {
      id: 7,
      image: narutoshortsBanner,
      title: "Shorts",
      slug: "naruto-shorts",
      lockEnabled: false,
    },

   
  ],
};