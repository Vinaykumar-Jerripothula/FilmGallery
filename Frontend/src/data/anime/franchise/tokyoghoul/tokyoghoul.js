import tokyoghoulstorywatchorderBanner from "../../../../images/anime/franchise/tokyoghoul/tokyoghoulstorywatchorderBanner.jpeg";
import tokyoghoulmoviesBanner from "../../../../images/anime/franchise/tokyoghoul/tokyoghoulmoviesBanner.jpeg";
import tokyoghoulspecialsBanner from "../../../../images/anime/franchise/tokyoghoul/tokyoghoulspecialsBanner.jpeg";
import tokyoghoulovaBanner from "../../../../images/anime/franchise/tokyoghoul/tokyoghoulovaBanner.jpeg";

export const tokyoGhoul = {
  title: "Tokyo Ghoul",
  subtitle: "Anime Franchise",
  contentId: "tokyoghoul",
  isHub: true,

  content: [
    {
      id: 1,
      image: tokyoghoulstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "tokyoghoul-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: tokyoghoulmoviesBanner,
      title: "Movies",
      slug: "tokyoghoul-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: tokyoghoulspecialsBanner,
      title: "Specials",
      slug: "tokyoghoul-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: tokyoghoulovaBanner,
      title: "OVAs",
      slug: "tokyoghoul-ovas",
      lockEnabled: false,
    },
  ],
};