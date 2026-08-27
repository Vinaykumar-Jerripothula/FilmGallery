import demonslayerstorywatchorderBanner from "../../../../images/anime/franchise/demonslayer/demonslayerstorywatchorderBanner.jpeg";
import demonslayermoviesBanner from "../../../../images/anime/franchise/demonslayer/demonslayermoviesBanner.jpeg";
import demonslayerspecialsBanner from "../../../../images/anime/franchise/demonslayer/demonslayerspecialsBanner.jpeg";
import demonslayerovaBanner from "../../../../images/anime/franchise/demonslayer/demonslayerovaBanner.jpeg";


export const demonSlayer = {
  title: "Demon Slayer",
  subtitle: "Anime Franchise",
  contentId: "demonslayer",
  isHub: true,

  content: [
    {
      id: 1,
      image: demonslayerstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "demonslayer-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: demonslayermoviesBanner,
      title: "Movies",
      slug: "demonslayer-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: demonslayerspecialsBanner,
      title: "Specials",
      slug: "demonslayer-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: demonslayerovaBanner,
      title: "OVAs",
      slug: "demonslayer-ovas",
      lockEnabled: false,
    },
  ],
};