import tokyorevengersstorywatchorderBanner from "../../../../images/anime/franchise/tokyorevengers/tokyorevengersstorywatchorderBanner.jpeg";
import tokyorevengersmoviesBanner from "../../../../images/anime/franchise/tokyorevengers/tokyorevengersmoviesBanner.jpeg";
import tokyorevengersspecialsBanner from "../../../../images/anime/franchise/tokyorevengers/tokyorevengersspecialsBanner.jpeg";
import tokyorevengersovaBanner from "../../../../images/anime/franchise/tokyorevengers/tokyorevengersovaBanner.jpeg";

export const tokyoRevengers = {
  title: "Tokyo Revengers",
  subtitle: "Anime Franchise",
  contentId: "tokyorevengers",
  isHub: true,

  content: [
    {
      id: 1,
      image: tokyorevengersstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "tokyorevengers-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: tokyorevengersmoviesBanner,
      title: "Movies",
      slug: "tokyorevengers-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: tokyorevengersspecialsBanner,
      title: "Specials",
      slug: "tokyorevengers-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: tokyorevengersovaBanner,
      title: "OVAs",
      slug: "tokyorevengers-ovas",
      lockEnabled: false,
    },
  ],
};