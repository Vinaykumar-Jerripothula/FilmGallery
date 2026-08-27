import spyxfamilystorywatchorderBanner from "../../../../images/anime/franchise/spyxfamily/spyxfamilystorywatchorderBanner.jpeg";
import spyxfamilymoviesBanner from "../../../../images/anime/franchise/spyxfamily/spyxfamilymoviesBanner.jpeg";
import spyxfamilyspecialsBanner from "../../../../images/anime/franchise/spyxfamily/spyxfamilyspecialsBanner.jpeg";
import spyxfamilyovaBanner from "../../../../images/anime/franchise/spyxfamily/spyxfamilyovaBanner.jpeg";

export const spyXFamily = {
  title: "Spy × Family",
  subtitle: "Anime Franchise",
  contentId: "spyxfamily",
  isHub: true,

  content: [
    {
      id: 1,
      image: spyxfamilystorywatchorderBanner,
      title: "Story Watch Order",
      slug: "spyxfamily-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: spyxfamilymoviesBanner,
      title: "Movies",
      slug: "spyxfamily-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: spyxfamilyspecialsBanner,
      title: "Specials",
      slug: "spyxfamily-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: spyxfamilyovaBanner,
      title: "OVAs",
      slug: "spyxfamily-ovas",
      lockEnabled: false,
    },
  ],
};