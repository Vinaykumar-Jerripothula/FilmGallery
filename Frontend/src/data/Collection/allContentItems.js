import { contentRegistry } from "./contentRegistry";
import { generateContentId } from "../../utils/generateContentId";

export const allContentItems = Object.entries(contentRegistry).flatMap(
  ([collectionKey, collection]) => {
    // Skip Anime Hub containers
    if (collection.isHub) {
      return [];
    }

    return collection.content
      .filter((item) => item.director) // only movie/series items
      .map((movie) => ({
        ...movie,

        contentId: generateContentId(movie),

        collectionId: collection.contentId,

        collectionTitle: collection.title,
      }));
  },
);