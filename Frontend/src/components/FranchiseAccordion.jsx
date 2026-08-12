import { useState } from "react";
import axios from "axios";
import { ChevronRight, Circle, CheckCircle2, Lock } from "lucide-react";
import { useEffect } from "react";

function FranchiseAccordion({
  franchiseName,
  content,
  contentId,
  completedCount = 0,
}) {
  const [open, setOpen] = useState(false);

  const [completed, setCompleted] = useState(completedCount);

  useEffect(() => {
    setCompleted(completedCount);
  }, [completedCount]);

  const handleToggle = async (index) => {
    if (index !== completed) {
      return;
    }

    const newCompleted = completed + 1;

    setCompleted(newCompleted);

    try {
      const userId = localStorage.getItem("userId");

      await axios.post("https://filmgallery.onrender.com/api/progress/save", {
        userId: Number(userId),
        contentId,
        lastCompletedPosition: newCompleted,
      });

      console.log("Progress saved");
    } catch (error) {
      console.error(error);
    }
  };

  const total = content.length;

  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  /*
    IMPORTANT:
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
    w-[95%]
    mx-auto
  "
    >
      {/* Franchise Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          p-2 sm:p-1
          text-left
          hover:bg-[#172036]
          transition-all
        "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div
              className={`
                flex-shrink-0
                text-orange-500
                transition-transform
                duration-300
                ${open ? "rotate-90" : ""}
              `}
            >
              <ChevronRight size={24} />
            </div>

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

      {/* Content */}
      {open && (
        <div className="border-t border-zinc-800">
          <div className="overflow-x-auto">
            {/* Table Container */}
            <div className="min-w-[1100px]">
              {/* Header */}
              <div
                className={`
                  ${gridColumns}
                  grid
                  gap-0
                  px-4 sm:px-6
                  py-4
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
                <div className="flex items-center">S.No</div>

                <div className="flex items-center">Title</div>

                <div className="flex items-center">Type</div>

                <div className="flex items-center">Year</div>

                <div className="flex items-center">Director</div>

                <div className="flex items-center">Actor</div>

                <div className="flex items-center">Country</div>

                <div className="flex items-center">Status</div>
              </div>

              {/* Rows */}
              {content.map((movie, index) => {
                const isCompleted = index < completed;

                const isCurrent = completed === index;

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
                      ${isCurrent ? "hover:bg-[#1A2233] cursor-pointer" : ""}
                    `}
                  >
                    {/* S.No */}
                    <div className="flex items-center gap-2 min-w-0">
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
                        pr-4
                        text-xs
                        sm:text-base
                        font-semibold
                        whitespace-normal
                        break-words
                        ${
                          isCompleted
                            ? "text-green-400 line-through"
                            : isCurrent
                              ? "text-orange-300"
                              : "text-zinc-500"
                        }
                      `}
                    >
                      {movie.title}
                    </div>

                    {/* Type */}
                    <div className="flex items-start min-w-0 pr-3">
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
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-nowrap
                      "
                    >
                      {movie.year}
                    </div>

                    {/* Director */}
                    <div
                      className="
                        min-w-0
                        pr-4
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-normal
                        break-words
                      "
                    >
                      {movie.director}
                    </div>

                    {/* Actor */}
                    <div
                      className="
                        min-w-0
                        pr-4
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-normal
                        break-words
                      "
                    >
                      {movie.actor}
                    </div>

                    {/* Country */}
                    <div
                      className="
                        text-zinc-300
                        text-xs
                        sm:text-sm
                        whitespace-normal
                        break-words
                        pr-3
                      "
                    >
                      {movie.country}
                    </div>

                    {/* Status */}
                    <div className="flex items-start">
                      {isCompleted ? (
                        <span
                          className="
                            text-[9px]
                            sm:text-xs
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
                            text-[9px]
                            sm:text-xs
                            font-semibold
                            px-2
                            sm:px-3
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
                            sm:text-xs
                            font-semibold
                            px-2
                            sm:px-3
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

export default FranchiseAccordion;
