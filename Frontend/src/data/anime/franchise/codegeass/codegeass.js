import codegeassstorywatchorderBanner from "../../../../images/anime/franchise/codegeass/codegeassstorywatchorderBanner.jpeg";
import codegeassmoviesBanner from "../../../../images/anime/franchise/codegeass/codegeassmoviesBanner.jpeg";
import codegeassspecialsBanner from "../../../../images/anime/franchise/codegeass/codegeassspecialsBanner.jpeg";
import codegeassovaBanner from "../../../../images/anime/franchise/codegeass/codegeassovaBanner.jpeg";

export const codeGeass = {
  title: "Code Geass",
  subtitle: "Anime Franchise",
  contentId: "codegeass",
  isHub: true,

  content: [
    {
      id: 1,
      image: codegeassstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "codegeass-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: codegeassmoviesBanner,
      title: "Movies",
      slug: "codegeass-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: codegeassspecialsBanner,
      title: "Specials",
      slug: "codegeass-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: codegeassovaBanner,
      title: "OVAs",
      slug: "codegeass-ovas",
      lockEnabled: false,
    },
  ],
};