import assassinationclassroomstorywatchorderBanner from "../../../../images/anime/franchise/assassinationclassroom/assassinationclassroomstorywatchorderBanner.jpeg";
import assassinationclassroommoviesBanner from "../../../../images/anime/franchise/assassinationclassroom/assassinationclassroommoviesBanner.jpeg";
import assassinationclassroomspecialsBanner from "../../../../images/anime/franchise/assassinationclassroom/assassinationclassroomspecialsBanner.jpeg";
import assassinationclassroomovaBanner from "../../../../images/anime/franchise/assassinationclassroom/assassinationclassroomovaBanner.jpeg";

export const assassinationClassroom = {
  title: "Assassination Classroom",
  subtitle: "Anime Franchise",
  contentId: "assassinationclassroom",
  isHub: true,

  content: [
    {
      id: 1,
      image: assassinationclassroomstorywatchorderBanner,
      title: "Story Watch Order",
      slug: "assassinationclassroom-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: assassinationclassroommoviesBanner,
      title: "Movies",
      slug: "assassinationclassroom-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: assassinationclassroomspecialsBanner,
      title: "Specials",
      slug: "assassinationclassroom-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: assassinationclassroomovaBanner,
      title: "OVAs",
      slug: "assassinationclassroom-ovas",
      lockEnabled: false,
    },
  ],
};