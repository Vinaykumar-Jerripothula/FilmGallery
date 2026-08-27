import steinsgatestorywatchorderBanner from "../../../../images/anime/franchise/steinsgate/steinsgatestorywatchorderBanner.jpeg";
import steinsgatemoviesBanner from "../../../../images/anime/franchise/steinsgate/steinsgatemoviesBanner.jpeg";
import steinsgatespecialsBanner from "../../../../images/anime/franchise/steinsgate/steinsgatespecialsBanner.jpeg";
import steinsgateovaBanner from "../../../../images/anime/franchise/steinsgate/steinsgateovaBanner.jpeg";

export const steinsGate = {
  title: "Steins;Gate",
  subtitle: "Anime Franchise",
  contentId: "steinsgate",
  isHub: true,

  content: [
    {
      id: 1,
      image: steinsgatestorywatchorderBanner,
      title: "Story Watch Order",
      slug: "steinsgate-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: steinsgatemoviesBanner,
      title: "Movies",
      slug: "steinsgate-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: steinsgatespecialsBanner,
      title: "Specials",
      slug: "steinsgate-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: steinsgateovaBanner,
      title: "OVAs",
      slug: "steinsgate-ovas",
      lockEnabled: false,
    },
  ],
};