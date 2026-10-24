import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import {
  ChevronDown,
  ChevronUp,
  Circle,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import { updateProgress } from "../../store/progressSlice";
import {
  markMovieWatched,
  unmarkMovieWatched,
} from "../../store/movieProgressSlice";
import telegramIcon from "../../images/watchicons/telegram.jpeg";

function ContentAccordion({
  franchiseName,
  content,
  contentId,
  completedCount = 0,
  watchedMovies = {},
  showHeader = true,
  mode = "franchise",
}) {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const currentTheme = colors[theme];

  const isMovieMode = mode === "movie";

  const isAnimeContent =
    content.length > 0 && content[0]?.creator && content[0]?.country;

  const [open, setOpen] = useState(!showHeader);
  const [completed, setCompleted] = useState(completedCount);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    setCompleted(completedCount);
  }, [completedCount]);

  useEffect(() => {
    if (!showHeader) {
      setOpen(true);
    }
  }, [showHeader]);

  const handleToggle = async (index) => {
    if (isMovieMode) {
      try {
        const userId = localStorage.getItem("userId");
        const movieContentId = content[index].contentId;

        const response = await axiosInstance.post(
          "/api/movie-progress/toggle",
          {
            userId: Number(userId),
            contentId: movieContentId,
          },
        );

        if (response.data.watched) {
          dispatch(markMovieWatched(movieContentId));
        } else {
          dispatch(unmarkMovieWatched(movieContentId));
        }
      } catch (error) {
        console.error("Movie progress toggle failed:", error);
      }

      return;
    }

    // Locked entries cannot be changed.
    if (index > completed) {
      return;
    }

    const previousCompleted = completed;

    const newCompleted =
      index === completed ? index + 1 : index;

    // Optimistic update.
    setCompleted(newCompleted);

    try {
      const userId = localStorage.getItem("userId");

      await axiosInstance.post("/api/progress/save", {
        userId: Number(userId),
        contentId,
        lastCompletedPosition: newCompleted,
      });

      dispatch(
        updateProgress({
          contentId,
          position: newCompleted,
        }),
      );
    } catch (error) {
      console.error("Progress save failed:", error);
      setCompleted(previousCompleted);
    }
  };

  const handleTelegramClick = async (title, year) => {
    const searchText = `${title} ${year}`;

    try {
      await navigator.clipboard.writeText(searchText);
    } catch (error) {
      console.error("Failed to copy movie title:", error);
    }

    window.open("https://t.me/+MArbDNiKNQ4yZjU1", "_blank");
  };

  const handleRowSelect = (index) => {
    setSelectedRow((previous) =>
      previous === index ? null : index,
    );
  };

  const total = content.length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  const isDark = theme === "dark";

  const cardBackground = isDark ? "bg-[#111827]" : "bg-white";
  const rowBackground = isDark ? "bg-[#111c30]" : "bg-white";
  const expandedBackground = isDark ? "bg-[#192438]" : "bg-slate-50";
  const borderColor = isDark ? "border-zinc-800" : "border-zinc-200";
  const primaryText = isDark ? "text-white" : "text-zinc-900";
  const secondaryText = isDark ? "text-zinc-400" : "text-zinc-600";

  return (
    <div
      className={`
        mx-auto
        w-[90%]
        sm:w-[90%]
        lg:w-[88%]
        overflow-hidden
        rounded-2xl
        border
        shadow-xl
        ${currentTheme.border}
        ${cardBackground}
      `}
    >
      {/* Franchise header */}
      {showHeader && (
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          className={`
            w-full
            p-3 sm:p-4
            text-left
            transition-colors
            ${isDark ? "hover:bg-[#172036]" : "hover:bg-zinc-50"}
          `}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <span
                className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                  open ? "rotate-90" : ""
                }`}
              >
                <ChevronDown size={24} />
              </span>

              <div className="min-w-0">
                <h2
                  className={`truncate text-sm font-semibold sm:text-lg ${currentTheme.text}`}
                >
                  {franchiseName}
                </h2>

                <p className={`mt-1 text-xs sm:text-sm ${currentTheme.secondaryText}`}>
                  Franchise Progress
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-3 sm:flex-col sm:items-end">
              <span className="text-lg font-semibold text-orange-500">
                {progress}%
              </span>

              <span className={`text-xs sm:text-sm ${currentTheme.secondaryText}`}>
                {completed} / {total}
              </span>
            </div>
          </div>

          <div
            className={`mt-4 h-1 overflow-hidden rounded-full ${
              isDark ? "bg-zinc-800" : "bg-zinc-200"
            }`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </button>
      )}

      {/* Movie list */}
      {open && (
        <div className={showHeader ? `border-t ${borderColor}` : ""}>
          {content.map((movie, index) => {
            let isCompleted;
            let isCurrent;
            let isLocked;

            if (isMovieMode) {
              isCompleted = Boolean(watchedMovies[movie.contentId]);
              isCurrent = false;
              isLocked = false;
            } else {
              isCompleted = index < completed;
              isCurrent = index === completed;
              isLocked = index > completed;
            }

            const isExpanded = selectedRow === index;

            const statusLabel = isCompleted
              ? "WATCHED"
              : isMovieMode
                ? "NOT YET"
                : isCurrent
                  ? "NEXT"
                  : "LOCKED";

            const statusStyle = isCompleted
              ? isDark
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-green-300 bg-green-50 text-green-700"
              : isCurrent
                ? isDark
                  ? "border-orange-500/30 bg-orange-500/10 text-orange-400"
                  : "border-orange-300 bg-orange-50 text-orange-700"
                : isDark
                  ? "border-zinc-700 bg-zinc-800 text-zinc-400"
                  : "border-zinc-300 bg-zinc-100 text-zinc-600";

            return (
              <div
                key={movie.id ?? movie.contentId ?? index}
                className={`border-b last:border-b-0 ${borderColor}`}
              >
                {/* Collapsed row: number + title on the left, arrow on the right */}
                <button
                  type="button"
                  onClick={() => handleRowSelect(index)}
                  aria-expanded={isExpanded}
                  className={`
                    flex
                    w-full
                    min-w-0
                    items-center
                    gap-2
                    px-3
                    py-4
                    text-left
                    transition-colors
                    sm:px-5
                    ${isExpanded ? expandedBackground : rowBackground}
                    ${isDark ? "hover:bg-[#1b263a]" : "hover:bg-zinc-50"}
                  `}
                >
                  <span className="flex shrink-0 items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle2
                        size={17}
                        className="text-green-500"
                        aria-label="Watched"
                      />
                    ) : isMovieMode || isCurrent ? (
                      <Circle
                        size={17}
                        className={
                          isCurrent
                            ? "text-orange-400"
                            : secondaryText
                        }
                        aria-label={isCurrent ? "Next" : "Not watched"}
                      />
                    ) : (
                      <Lock
                        size={16}
                        className="text-zinc-500"
                        aria-label="Locked"
                      />
                    )}

                    <span className={`text-xs ${secondaryText}`}>
                      {movie.watchOrder ?? index + 1}.
                    </span>
                  </span>

                  <span
                    className={`
                      min-w-0
                      flex-1
                      text-left
                      text-sm
                      font-normal
                      leading-snug
                      [overflow-wrap:anywhere]
                      ${
                        isCompleted
                          ? "text-green-500 line-through"
                          : isCurrent
                            ? "text-orange-400"
                            : primaryText
                      }
                    `}
                  >
                    {movie.title}
                  </span>

                  <span className="flex shrink-0 items-center">
                    {isExpanded ? (
                      <ChevronUp
                        size={17}
                        className={secondaryText}
                      />
                    ) : (
                      <ChevronDown
                        size={17}
                        className={secondaryText}
                      />
                    )}
                  </span>
                </button>

                {/* Expanded details: status is shown here, not in the collapsed row */}
                {isExpanded && (
                  <div
                    className={`px-4 pb-4 pt-1 sm:px-6 sm:pb-5 ${expandedBackground}`}
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          Status
                        </p>

                        <button
                          type="button"
                          disabled={isLocked}
                          onClick={(event) => {
                            event.stopPropagation();

                            if (!isLocked) {
                              handleToggle(index);
                            }
                          }}
                          className={`
                            inline-flex
                            max-w-full
                            items-center
                            justify-center
                            rounded-full
                            border
                            px-3
                            py-1
                            text-[10px]
                            font-medium
                            tracking-wide
                            transition
                            ${statusStyle}
                            ${
                              isLocked
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:brightness-110"
                            }
                          `}
                        >
                          {statusLabel}
                        </button>
                      </div>

                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          Type
                        </p>
                        <p className={`text-sm ${primaryText}`}>
                          {movie.type || "—"}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          Year
                        </p>
                        <p className={`text-sm ${primaryText}`}>
                          {movie.year || "—"}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          IMDb
                        </p>
                        <p className={`text-sm ${primaryText}`}>
                          {movie.imdb || "—"}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          {isAnimeContent ? "Creator" : "Director"}
                        </p>
                        <p
                          className={`break-words text-sm ${primaryText}`}
                          title={isAnimeContent ? movie.creator : movie.director}
                        >
                          {(isAnimeContent ? movie.creator : movie.director) || "—"}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className={`mb-1 text-xs ${secondaryText}`}>
                          {isAnimeContent ? "Country" : "Actor"}
                        </p>
                        <p
                          className={`break-words text-sm ${primaryText}`}
                          title={isAnimeContent ? movie.country : movie.actor}
                        >
                          {(isAnimeContent ? movie.country : movie.actor) || "—"}
                        </p>
                      </div>

                      <div className="col-span-2 flex items-end sm:col-span-1">
                        <button
                          type="button"
                          onClick={() =>
                            handleTelegramClick(movie.title, movie.year)
                          }
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-sky-500/30
                            bg-sky-500/10
                            px-3
                            mt-2
                            py-1
                            text-sm
                            text-sky-400
                            transition
                            hover:bg-sky-500/20
                          "
                          title={`Copy "${movie.title} ${movie.year}" and open Telegram`}
                        >
                          <img
                            src={telegramIcon}
                            alt=""
                            className="h-4 w-4 rounded-full"
                          />
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ContentAccordion;