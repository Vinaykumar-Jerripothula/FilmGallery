import hunterxhunterstorywatchorderBanner from "../../../../images/anime/franchise/hunterxhunter/hunterxhunterstorywatchorderBanner.jpeg";
import hunterxhuntermoviesBanner from "../../../../images/anime/franchise/hunterxhunter/hunterxhuntermoviesBanner.jpeg";
import hunterxhunterspecialsBanner from "../../../../images/anime/franchise/hunterxhunter/hunterxhunterspecialsBanner.jpeg";
import hunterxhunterovaBanner from "../../../../images/anime/franchise/hunterxhunter/hunterxhunterovaBanner.jpeg";

export const hunterXHunter = {
  title: "Hunter × Hunter",
  subtitle: "Anime Franchise",
  contentId: "hunterxhunter",
  isHub: true,

  content: [
    {
      id: 1,
      image: hunterxhunterstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "hunterxhunter-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: hunterxhuntermoviesBanner,
      title: "Movies",
      slug: "hunterxhunter-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: hunterxhunterspecialsBanner,
      title: "Specials",
      slug: "hunterxhunter-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: hunterxhunterovaBanner,
      title: "OVAs",
      slug: "hunterxhunter-ovas",
      lockEnabled: false,
    },
  ],
};