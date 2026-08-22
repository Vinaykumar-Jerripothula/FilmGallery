import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import { useSelector } from "react-redux";
import { generateContentId } from "../../utils/generateContentId";
import { enrichedPeopleData } from "../../utils/enrichPeopleData";

function PersonCard({ name, image, route, slug, type }) {
  const navigate = useNavigate();
  console.log("slug =", slug);
  console.log("type =", type);
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const watchedMovies = useSelector(
    (state) => state.movieProgress.watchedMovies,
  );
  const person =
    type === "actor"
      ? enrichedPeopleData.actors[slug]
      : enrichedPeopleData.directors[slug];

  const movies = person?.movies || [];

  const totalMovies = movies.length;
  console.log(person);
  console.log(movies[0]);
  console.log(watchedMovies);
  const watchedCount = movies.filter(
    (movie) => watchedMovies[movie.contentId],
  ).length;

  const progress =
    totalMovies > 0 ? Math.round((watchedCount / totalMovies) * 100) : 0;

  return (
    <div
      onClick={() => navigate(route)}
      className="
        cursor-pointer
        flex-shrink-0
        w-[120px]
        sm:w-[140px]
      "
    >
      <div
        className={`
    relative
    overflow-hidden
    rounded-xl
    border
    ${currentTheme.border}
    ${currentTheme.card}
    transition-transform
    duration-300
    hover:scale-103
  `}
      >
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-[180px]
            sm:h-[210px]
            object-cover
          "
        />
        <div className="absolute bottom-1 left-2 right-2">
          <div className="h-0.5 bg-black/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-400 flex-shrink-0"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-0.5 flex justify-between items-center text-[10px] font-semibold text-white">
            <span>
              {watchedCount}/{totalMovies}
            </span>

            <span className="text-orange-400">{progress}%</span>
          </div>
        </div>
      </div>

      <h3
        className={`
          mt-2
          text-center
          text-xs
          sm:text-sm
          font-semibold
          ${currentTheme.text}
        `}
      >
        {name}
      </h3>
    </div>
  );
}

export default PersonCard;
