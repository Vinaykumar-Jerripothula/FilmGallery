import bluelockstorywatchorderBanner from "../../../../images/anime/franchise/bluelock/bluelockstorywatchorderBanner.jpeg";
import bluelockmoviesBanner from "../../../../images/anime/franchise/bluelock/bluelockmoviesBanner.jpeg";
import bluelockspecialsBanner from "../../../../images/anime/franchise/bluelock/bluelockspecialsBanner.jpeg";
import bluelockovaBanner from "../../../../images/anime/franchise/bluelock/bluelockovaBanner.jpeg";

export const blueLock = {
  title: "Blue Lock",
  subtitle: "Anime Franchise",
  contentId: "bluelock",
  isHub: true,

  content: [
    {
      id: 1,
      image: bluelockstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "bluelock-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: bluelockmoviesBanner,
      title: "Movies",
      slug: "bluelock-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: bluelockspecialsBanner,
      title: "Specials",
      slug: "bluelock-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: bluelockovaBanner,
      title: "OVAs",
      slug: "bluelock-ovas",
      lockEnabled: false,
    },
  ],
};