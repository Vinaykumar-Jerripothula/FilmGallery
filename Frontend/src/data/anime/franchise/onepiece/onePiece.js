import onepiecestorywatchorderBanner from "../../../../images/anime/franchise/onepiece/onepiecestorywatchorderBanner.jpeg";
import onepiecemoviesBanner from "../../../../images/anime/franchise/onepiece/onepiecemoviesBanner.jpeg";
import onepiecespecialsBanner from "../../../../images/anime/franchise/onepiece/onepiecespecialsBanner.jpeg";
import onepieceovaBanner from "../../../../images/anime/franchise/onepiece/onepieceovaBanner.jpeg";
export const onePiece = {
  title: "One Piece",
  subtitle: "Anime Franchise",
  contentId: "onepiece",
  isHub: true,
  content: [
    {
      id: 1,
      image: onepiecestorywatchorderBanner,
      title: "Story Watch Order",
      slug: "onepiece-story-watch-order",
      lockEnabled: true,
    },

    {
      id: 2,
      image: onepiecemoviesBanner,
      title: "Movies",
      slug: "onepiece-movies",
      lockEnabled: false,
    },

    {
      id: 3,
      image: onepiecespecialsBanner , 
      title: "Specials",
      slug: "onepiece-specials",
      lockEnabled: false,
    },

    {
      id: 4,
      image: onepieceovaBanner , 
      title: "OVAs",
      slug: "onepiece-ovas",
      lockEnabled: false,
    },
  ],
};
