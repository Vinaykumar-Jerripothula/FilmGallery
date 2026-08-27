import myheroacademiastorywatchorderBanner from "../../../../images/anime/franchise/myheroacademia/myheroacademiastorywatchorderBanner.jpeg";
import myheroacademiamoviesBanner from "../../../../images/anime/franchise/myheroacademia/myheroacademiamoviesBanner.jpeg";
import myheroacademiaspecialsBanner from "../../../../images/anime/franchise/myheroacademia/myheroacademiaspecialsBanner.jpeg";
import myheroacademiaovaBanner from "../../../../images/anime/franchise/myheroacademia/myheroacademiaovaBanner.jpeg";

export const myHeroAcademia = {
  title: "My Hero Academia",
  subtitle: "Anime Franchise",
  contentId: "myheroacademia",
  isHub: true,

  content: [
    {
      id: 1,
      image: myheroacademiastorywatchorderBanner,
      title: "Story Watch Order",
      slug: "myheroacademia-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: myheroacademiamoviesBanner,
      title: "Movies",
      slug: "myheroacademia-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: myheroacademiaspecialsBanner,
      title: "Specials",
      slug: "myheroacademia-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: myheroacademiaovaBanner,
      title: "OVAs",
      slug: "myheroacademia-ovas",
      lockEnabled: false,
    },
  ],
};