import jujutsukaisenstorywatchorderBanner from "../../../../images/anime/franchise/jujutsukaisen/jujutsukaisenstorywatchorderBanner.jpeg";
import jujutsukaisenmoviesBanner from "../../../../images/anime/franchise/jujutsukaisen/jujutsukaisenmoviesBanner.jpeg";
import jujutsukaisenspecialsBanner from "../../../../images/anime/franchise/jujutsukaisen/jujutsukaisenspecialsBanner.jpeg";
import jujutsukaisenovaBanner from "../../../../images/anime/franchise/jujutsukaisen/jujutsukaisenovaBanner.jpeg";

export const jujutsuKaisen = {
  title: "Jujutsu Kaisen",
  subtitle: "Anime Franchise",
  contentId: "jujutsukaisen",
  isHub: true,

  content: [
    {
      id: 1,
      image: jujutsukaisenstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "jujutsukaisen-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: jujutsukaisenmoviesBanner,
      title: "Movies",
      slug: "jujutsukaisen-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: jujutsukaisenspecialsBanner,
      title: "Specials",
      slug: "jujutsukaisen-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: jujutsukaisenovaBanner,
      title: "OVAs",
      slug: "jujutsukaisen-ovas",
      lockEnabled: false,
    },
  ],
};