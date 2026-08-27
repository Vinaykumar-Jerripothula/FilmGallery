import blackcloverstorywatchorderBanner from "../../../../images/anime/franchise/blackclover/blackcloverstorywatchorderBanner.jpeg";
import blackclovermoviesBanner from "../../../../images/anime/franchise/blackclover/blackclovermoviesBanner.jpeg";
import blackcloverspecialsBanner from "../../../../images/anime/franchise/blackclover/blackcloverspecialsBanner.jpeg";
import blackcloverovaBanner from "../../../../images/anime/franchise/blackclover/blackcloverovaBanner.jpeg";

export const blackClover = {
  title: "Black Clover",
  subtitle: "Anime Franchise",
  contentId: "blackclover",
  isHub: true,

  content: [
    {
      id: 1,
      image: blackcloverstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "blackclover-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: blackclovermoviesBanner,
      title: "Movies",
      slug: "blackclover-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: blackcloverspecialsBanner,
      title: "Specials",
      slug: "blackclover-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: blackcloverovaBanner,
      title: "OVAs",
      slug: "blackclover-ovas",
      lockEnabled: false,
    },
  ],
};