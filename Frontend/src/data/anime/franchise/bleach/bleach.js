import bleachstorywatchorderBanner from "../../../../images/anime/franchise/bleach/bleachstorywatchorderBanner.jpeg";
import bleachmoviesBanner from "../../../../images/anime/franchise/bleach/bleachmoviesBanner.jpeg";
import bleachspecialsBanner from "../../../../images/anime/franchise/bleach/bleachspecialsBanner.jpeg";
import bleachovaBanner from "../../../../images/anime/franchise/bleach/bleachovaBanner.jpeg";

export const bleach = {
  title: "Bleach",
  subtitle: "Anime Franchise",
  contentId: "bleach",
  isHub: true,

  content: [
    {
      id: 1,
      image: bleachstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "bleach-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: bleachmoviesBanner,
      title: "Movies",
      slug: "bleach-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: bleachspecialsBanner,
      title: "Specials",
      slug: "bleach-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: bleachovaBanner,
      title: "OVAs",
      slug: "bleach-ovas",
      lockEnabled: false,
    },
  ],
};