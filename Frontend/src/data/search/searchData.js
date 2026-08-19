import { contentRegistry } from "../Collection/contentRegistry";

export const searchData = [
  ...new Map(
    Object.values(contentRegistry)
      .flatMap((collection) => [
        {
          title: collection.title,
          contentId: collection.contentId,
          collectionTitle: collection.title,
        },

        ...collection.content.map((item) => ({
          title: item.title,
          contentId: collection.contentId,
          collectionTitle: collection.title,
        })),
      ])
      .map((item) => [item.title, item])
  ).values(),
];

