import  mcuImage  from "../../../images/hollywood/universe/mcu/mcuImage.jpeg";
import dceuImage from "../../../images/hollywood/universe/dceu/dceuImage.jpeg";
import dcuImage from "../../../images/hollywood/universe/dcu/dcuImage.jpeg";
import starWarsImage  from "../../../images/hollywood/universe/starwars/starWarsImage.jpeg";
import theConjuringImage from "../../../images/hollywood/universe/theconjuring/theConjuringImage.jpeg";
import monsterVerseImage from "../../../images/hollywood/universe/monsterverse/monsterVerseImage.jpeg";
import xmenImage from "../../../images/hollywood/universe/xmen/xmenImage.jpeg";

export const universeData = [
  {
    id: 1,
    title: "Marvel Cinematic Universe",
    contentId: "mcu",
    image: mcuImage,
    total: 80,
    route: "/hollywood/universe/mcu",
  },

  {
    id: 2,
    title: "Detective Comics Extended Universe",
    contentId: "dceu",
    image: dceuImage,
    total: 16,
    route: "/hollywood/universe/dceu",
  },

  {
    id: 3,
    title: "DCU Universe",
    contentId: "dcu",
    image: dcuImage,
    total: 3,
    route: "/hollywood/universe/dcu",
  },

  {
    id: 4,
    title: "Star Wars",
    contentId: "starwars",
    image: starWarsImage,
    total: 41,
    route: "/hollywood/universe/starwars",
  },

  {
    id: 5,
    title: "The Conjuring Universe",
    contentId: "theconjuring",
    image: theConjuringImage,
    total: 9,
    route: "/hollywood/universe/theconjuring",
  },

  {
    id: 6,
    title: "Monster Verse Universe",
    contentId: "monsterverse",
    image: monsterVerseImage,
    total: 8,
    route: "/hollywood/universe/monsterverse",
  },

  {
    id: 7,
    title: "X-MEN Universe",
    contentId: "xmen",
    image: xmenImage,
    total: 14,
    route: "/hollywood/universe/xmen",
  },
];