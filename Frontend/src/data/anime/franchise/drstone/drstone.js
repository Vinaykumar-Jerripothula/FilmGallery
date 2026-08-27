import drstonestorywatchorderBanner from "../../../../images/anime/franchise/drstone/drstonestorywatchorderBanner.jpeg";
import drstonemoviesBanner from "../../../../images/anime/franchise/drstone/drstonemoviesBanner.jpeg";
import drstonespecialsBanner from "../../../../images/anime/franchise/drstone/drstonespecialsBanner.jpeg";
import drstoneovaBanner from "../../../../images/anime/franchise/drstone/drstoneovaBanner.jpeg";

export const drStone = {
  title: "Dr. Stone",
  subtitle: "Anime Franchise",
  contentId: "drstone",
  isHub: true,

  content: [
    {
      id: 1,
      image: drstonestorywatchorderBanner,
      title: "Story Watch Order",
      slug: "drstone-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: drstonemoviesBanner,
      title: "Movies",
      slug: "drstone-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: drstonespecialsBanner,
      title: "Specials",
      slug: "drstone-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: drstoneovaBanner,
      title: "OVAs",
      slug: "drstone-ovas",
      lockEnabled: false,
    },
  ],
};