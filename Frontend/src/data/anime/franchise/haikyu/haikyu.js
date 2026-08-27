import haikyustorywatchorderBanner from "../../../../images/anime/franchise/haikyu/haikyustorywatchorderBanner.jpeg";
import haikyumoviesBanner from "../../../../images/anime/franchise/haikyu/haikyumoviesBanner.jpeg";
import haikyuspecialsBanner from "../../../../images/anime/franchise/haikyu/haikyuspecialsBanner.jpeg";
import haikyuovaBanner from "../../../../images/anime/franchise/haikyu/haikyuovaBanner.jpeg";

export const haikyu = {
  title: "Haikyu!!",
  subtitle: "Anime Franchise",
  contentId: "haikyu",
  isHub: true,

  content: [
    {
      id: 1,
      image: haikyustorywatchorderBanner,
      title: "Story Watch Order",
      slug: "haikyu-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: haikyumoviesBanner,
      title: "Movies",
      slug: "haikyu-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: haikyuspecialsBanner,
      title: "Specials",
      slug: "haikyu-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: haikyuovaBanner,
      title: "OVAs",
      slug: "haikyu-ovas",
      lockEnabled: false,
    },
  ],
};