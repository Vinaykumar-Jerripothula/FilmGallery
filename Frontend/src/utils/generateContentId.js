export function generateContentId(movie) {
  const normalize = (text = "") =>
    text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  return `${normalize(movie.title)}_${movie.year}_${normalize(
    movie.director || movie.creator,
  )}`;
}