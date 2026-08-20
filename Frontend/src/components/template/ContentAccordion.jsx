import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { ChevronRight, Circle, CheckCircle2, Lock } from "lucide-react";

import { updateProgress } from "../../store/progressSlice";

function ContentAccordion({
  franchiseName,
  content,
  contentId,
  completedCount = 0,
  showHeader = true,
}) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(!showHeader);
  const [completed, setCompleted] = useState(completedCount);

  useEffect(() => {
    setCompleted(completedCount);
  }, [completedCount]);

  useEffect(() => {
    if (!showHeader) {
      setOpen(true);
    }
  }, [showHeader]);

  const handleToggle = async (index) => {
    /*
      Rules:

      index > completed
        → LOCKED
        → Do nothing

      index === completed
        → NEXT movie
        → Complete it
        → completed = index + 1

      index < completed
        → Already completed movie
        → Make this movie NEXT
        → completed = index
    */

    if (index > completed) {
      return;
    }

    const previousCompleted = completed;

    let newCompleted;

    if (index === completed) {
      // Current NEXT item is being completed.
      newCompleted = index + 1;
    } else {
      // An already completed item was selected.
      // That item becomes NEXT.
      newCompleted = index;
    }

    // Optimistic local update.
    setCompleted(newCompleted);

    try {
      const userId = localStorage.getItem("userId");

      await axiosInstance.post("/api/progress/save", {
        userId: Number(userId),
        contentId,
        lastCompletedPosition: newCompleted,
      });

      // Keep Redux synchronized with the database.
      dispatch(
        updateProgress({
          contentId,
          position: newCompleted,
        }),
      );

      console.log(`Progress updated: ${contentId} = ${newCompleted}`);
    } catch (error) {
      console.error("Progress save failed:", error);

      // Backend failed → restore previous UI state.
      setCompleted(previousCompleted);
    }
  };

  const total = content.length;

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  /*
    Header and rows use exactly the same
    grid column structure.
  */
  const gridColumns =
    "grid-cols-[80px_minmax(250px,1fr)_110px_90px_180px_180px_110px_130px]";

  return (
    <div
      className="
        bg-[#111827]
        border
        border-zinc-800
        rounded-2xl
        overflow-hidden
        shadow-xl       
        w-[90%]
        sm:w-[95%]
        lg:w-[78%]
        mx-auto
      "
    >
      {/* =====================================================
          FRANCHISE HEADER
          ===================================================== */}

      {showHeader && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            w-full
            p-2 sm:p-1
            text-left
            hover:bg-[#172036]
            transition-all
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
            "
          >
            <div className="flex items-center gap-4 min-w-0">
              {/* Arrow */}
              <div
                className={`
                  flex-shrink-0
                  text-orange-500
                  transition-transform
                  duration-300
                  ${open ? "rotate-90" : ""}
                `}
              >
                <ChevronRight size={44} />
              </div>

              {/* Name */}
              <div className="min-w-0">
                <h2
                  className="
                    text-xs
                    sm:text-lg
                    font-bold
                    tracking-tight
                    text-white
                    truncate
                  "
                >
                  {franchiseName}
                </h2>

                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Franchise Progress
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="text-left sm:text-right flex-shrink-0">
              <div className="text-xl sm:text-1xl font-black text-orange-500">
                {progress}%
              </div>

              <div className="text-zinc-400 text-xs sm:text-sm">
                {completed} / {total}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-5 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="
                h-full
                bg-gradient-to-r
                from-orange-500
                via-orange-400
                to-yellow-400
                transition-all
                duration-500
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </button>
      )}

      {/* =====================================================
          CONTENT / TABLE
          ===================================================== */}

      {open && (
        <div className={showHeader ? "border-t border-zinc-800" : ""}>
          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">
              {/* Table Header */}
              <div
                className={`
                  ${gridColumns}
                  grid
                  gap-0
                  px-6
                  py-6
                  bg-[#0f172a]
                  border-b
                  border-zinc-700
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-zinc-400
                `}
              >
                <div className="pr-4 flex items-center justify-center">
                  S.No
                </div>

                <div className="flex items-center justify-center">Title</div>

                <div className="pr-3 flex items-center justify-center">
                  Type
                </div>

                <div className="pr-4 flex items-center justify-center">
                  Year
                </div>

                <div className="pr-3 flex items-center justify-center">
                  Imdb
                </div>

                <div className="pr-3 flex items-center justify-center">
                  Director
                </div>

                <div className="pr-3 flex items-center justify-center">
                  Actor
                </div>

                <div className="pr-4 flex items-center justify-center">
                  Status
                </div>
              </div>

              {/* Table Rows */}
              {content.map((movie, index) => {
                const isCompleted = index < completed;
                const isCurrent = index === completed;
                const isLocked = index > completed;

                return (
                  <div
                    key={movie.id}
                    onClick={() => handleToggle(index)}
                    className={`
                      ${gridColumns}
                      grid
                      gap-0
                      px-4 sm:px-6
                      py-4
                      border-b
                      border-zinc-800
                      transition-all
                      duration-300

                      ${isCompleted ? "cursor-pointer hover:bg-[#151d2c]" : ""}

                      ${isCurrent ? "cursor-pointer hover:bg-[#1A2233]" : ""}

                      ${isLocked ? "cursor-not-allowed" : ""}
                    `}
                  >
                    {/* S.No */}
                    <div className="flex items-center justify-center gap-2 min-w-0">
                      {isCompleted ? (
                        <CheckCircle2
                          size={18}
                          className="
                            text-green-500
                            flex-shrink-0
                          "
                        />
                      ) : isCurrent ? (
                        <Circle
                          size={18}
                          className="
                            text-orange-400
                            flex-shrink-0
                          "
                        />
                      ) : (
                        <Lock
                          size={16}
                          className="
                            text-zinc-600
                            flex-shrink-0
                          "
                        />
                      )}

                      <span className="text-xs sm:text-sm whitespace-nowrap">
                        {movie.watchOrder}
                      </span>
                    </div>

                    {/* Title */}
                    <div
                      className={`
                        min-w-0
                        text-xs
                        sm:text-base
                        font-semibold
                        whitespace-normal
                        break-words

                        ${
                          isCompleted
                            ? "text-green-400"
                            : isCurrent
                              ? "text-orange-300"
                              : "text-zinc-500"
                        }
                      `}
                    >
                      {movie.title}
                    </div>

                    {/* Type */}
                    <div className="flex items-start justify-center min-w-0">
                      <span
                        className="
                          px-2
                          py-1
                          rounded-md
                          text-[9px]
                          sm:text-xs
                          bg-zinc-800
                          border
                          border-zinc-700
                          whitespace-nowrap
                        "
                      >
                        {movie.type}
                      </span>
                    </div>

                    {/* Year */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                      "
                    >
                      {movie.year}
                    </div>

                    {/* IMDb */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                      "
                    >
                      {movie.imdb}
                    </div>

                    {/* Director */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                      "
                    >
                      {movie.director}
                    </div>

                    {/* Actor */}
                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                      "
                    >
                      {movie.actor}
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-center">
                      {isCompleted ? (
                        <span
                          className="
                            text-[6px]
                            sm:text-[8px]
                            font-semibold
                            px-2
                            sm:px-3
                            py-1
                            rounded-full
                            bg-green-500/20
                            text-green-400
                            border
                            border-green-500/30
                            whitespace-nowrap
                          "
                        >
                          COMPLETED
                        </span>
                      ) : isCurrent ? (
                        <span
                          className="
                            text-[6px]
                            sm:text-[10px]
                            font-semibold
                            px-3
                            sm:px-5
                            py-1
                            rounded-full
                            bg-orange-500/20
                            text-orange-400
                            border
                            border-orange-500/30
                            whitespace-nowrap
                          "
                        >
                          NEXT
                        </span>
                      ) : (
                        <span
                          className="
                            text-[9px]
                            sm:text-[10px]
                            font-semibold
                            px-3
                            sm:px-3.5
                            py-1
                            rounded-full
                            bg-zinc-800
                            text-zinc-500
                            border
                            border-zinc-700
                            whitespace-nowrap
                          "
                        >
                          LOCKED
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentAccordion;
