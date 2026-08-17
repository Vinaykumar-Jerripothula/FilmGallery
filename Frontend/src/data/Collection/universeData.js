import  mcuImage  from "../../images/universe/mcu/mcuImage.jpeg";
import dceuImage from "../../images/universe/dceu/dceuImage.jpeg";
import dcuImage from "../../images/universe/dcu/dcuImage.jpeg";
import starWarsImage  from "../../images/universe/starwars/starWarsImage.jpeg";
import theConjuringImage from "../../images/universe/theconjuring/theConjuringImage.jpeg";

export const universeData = [
  {
    id: 1,
    title: "Marvel Cinematic Universe",
    contentId: "mcu",
    image: mcuImage,
    total: 80,
    route: "/mcu",
  },

  {
    id: 2,
    title: "Detective Comics Extended Universe",
    contentId: "dceu",
    image: dceuImage,
    total: 16,
    route: "/dceu",
  },

  {
    id: 3,
    title: "DCU Universe",
    contentId: "dcu",
    image: dcuImage,
    total: 3,
    route: "/dcu",
  },

  {
    id: 4,
    title: "Star Wars",
    contentId: "starwars",
    image: starWarsImage,
    total: 41,
    route: "/starwars",
  },

  {
    id: 5,
    title: "The Conjuring Universe",
    contentId: "conjuring",
    image: theConjuringImage,
    total: 9,
    route: "/theconjuring",
  },

  {
    id: 6,
    title: "Monster Verse Universe",
    contentId: "monsterverse",
    image: null,
    total: 8,
    route: "/monsterverse",
  },

  {
    id: 7,
    title: "X-MEN Universe",
    contentId: "xmen",
    image: null,
    total: 14,
    route: "/xmen",
  },
];