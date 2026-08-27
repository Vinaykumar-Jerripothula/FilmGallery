import chainsawmanstorywatchorderBanner from "../../../../images/anime/franchise/chainsawman/chainsawmanstorywatchorderBanner.jpeg";
import chainsawmanmoviesBanner from "../../../../images/anime/franchise/chainsawman/chainsawmanmoviesBanner.jpeg";
import chainsawmanspecialsBanner from "../../../../images/anime/franchise/chainsawman/chainsawmanspecialsBanner.jpeg";
import chainsawmanovaBanner from "../../../../images/anime/franchise/chainsawman/chainsawmanovaBanner.jpeg";

export const chainsawMan = {
  title: "Chainsaw Man",
  subtitle: "Anime Franchise",
  contentId: "chainsawman",
  isHub: true,

  content: [
    {
      id: 1,
      image: chainsawmanstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "chainsawman-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: chainsawmanmoviesBanner,
      title: "Movies",
      slug: "chainsawman-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: chainsawmanspecialsBanner,
      title: "Specials",
      slug: "chainsawman-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: chainsawmanovaBanner,
      title: "OVAs",
      slug: "chainsawman-ovas",
      lockEnabled: false,
    },
  ],
};