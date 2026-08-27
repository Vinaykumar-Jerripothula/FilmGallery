import fullmetalalchemiststorywatchorderBanner from "../../../../images/anime/franchise/fullmetalalchemist/fastorywatchorderBanner.jpeg";
import fullmetalalchemistmoviesBanner from "../../../../images/anime/franchise/fullmetalalchemist/fullmetalalchemistmoviesBanner.jpeg";
import fullmetalalchemistspecialsBanner from "../../../../images/anime/franchise/fullmetalalchemist/fullmetalalchemistspecialsBanner.jpeg";
import fullmetalalchemistovaBanner from "../../../../images/anime/franchise/fullmetalalchemist/fullmetalalchemistovaBanner.jpeg";

export const fullmetalAlchemist = {
  title: "Fullmetal Alchemist",
  subtitle: "Anime Franchise",
  contentId: "fullmetalalchemist",
  isHub: true,

  content: [
    {
      id: 1,
      image: fullmetalalchemiststorywatchorderBanner,
      title: "Story Watch Order",
      slug: "fullmetalalchemist-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: fullmetalalchemistmoviesBanner,
      title: "Movies",
      slug: "fullmetalalchemist-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: fullmetalalchemistspecialsBanner,
      title: "Specials",
      slug: "fullmetalalchemist-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: fullmetalalchemistovaBanner,
      title: "OVAs",
      slug: "fullmetalalchemist-ovas",
      lockEnabled: false,
    },
  ],
};