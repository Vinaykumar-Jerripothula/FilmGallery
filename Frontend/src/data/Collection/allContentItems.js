import { contentRegistry } from "./contentRegistry";
import { generateContentId } from "../../utils/generateContentId";

export const allContentItems = Object.entries(contentRegistry).flatMap(
  ([collectionKey, collection]) =>
    collection.content.map((movie) => ({
      ...movie,

      contentId: generateContentId(movie),

      collectionId: collection.contentId,

      collectionTitle: collection.title,
    })),
);

