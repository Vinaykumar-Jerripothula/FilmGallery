import { generateContentId } from "./generateContentId";

export function enrichCollectionData(data) {
  return data.map((movie) => ({
    ...movie,
    contentId: generateContentId(movie),
  }));
}