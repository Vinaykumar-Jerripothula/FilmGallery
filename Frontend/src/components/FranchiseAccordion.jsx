import { useState } from "react";
import {
  ChevronRight,
  Circle,
  CheckCircle2,
  Lock,
} from "lucide-react";


function FranchiseAccordion({
  franchiseName,
  content,
}) {
  const [open, setOpen] = useState(false);


  const [completedMovies, setCompletedMovies] =
    useState([]);


  const handleToggle = (movieId, index) => {
    const isCompleted =
      completedMovies.includes(movieId);


    if (isCompleted) return;


    const canComplete =
      completedMovies.length === index;


    if (!canComplete) return;


    setCompletedMovies([
      ...completedMovies,
      movieId,
    ]);
  };


  const completed =
    completedMovies.length;


  const total = content.length;


  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );


  return (
    <div
      className="
        bg-[#111827]
        border
        border-zinc-800
        rounded-2xl
        overflow-hidden
        shadow-xl
        mx-2
        sm:mx-0
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          p-4 sm:p-5
          text-left
          hover:bg-[#172036]
          transition-all
        "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">


          <div className="flex items-center gap-4">
            <div
              className={`
                text-orange-500
                transition-transform
                duration-300
                ${open ? "rotate-90" : ""}
              `}
            >
              <ChevronRight size={24} />
            </div>


            <div>
              <h2 className="text-base sm:text-1xl text-xs font-bold tracking-tight text-white">
                {franchiseName}
              </h2>


              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Franchise Progress
              </p>
            </div>
          </div>


          <div className="text-left sm:text-right">
            <div className="text-xl sm:text-4xl font-black text-orange-500">
              {progress}%
            </div>


            <div className="text-zinc-400 text-xs sm:text-sm">
              {completed} / {total}
            </div>
          </div>
        </div>


        <div className="mt-5 h-3 bg-zinc-800 rounded-full overflow-hidden">
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


      {open && (
        <div className="border-t border-zinc-800">
          <div className="overflow-x-auto px-3 sm:px-0">


            {/* Header */}
            <div
              className="
                min-w-[1100px]
                grid
                grid-cols-[70px_5fr_120px_90px_180px_180px_90px_140px]
                gap-4
                px-6
                py-4
                bg-[#0f172a]
                border-b
                border-zinc-700
                text-[11px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-wider
                text-zinc-400
              "
            >
              <div>#</div>
              <div>Title</div>
              <div>Type</div>
              <div>Year</div>
              <div>Director</div>
              <div>Actor</div>
              <div>Country</div>
              <div>Status</div>
            </div>


            {content.map((movie, index) => {
              const isCompleted =
                completedMovies.includes(
                  movie.id
                );


              const isCurrent =
                completedMovies.length ===
                index;


              return (
                <div
                  key={movie.id}
                  onClick={() =>
                    handleToggle(
                      movie.id,
                      index
                    )
                  }
                  className={`
                    min-w-[1400px]
                    grid
                    grid-cols-[70px_5fr_120px_90px_180px_180px_90px_140px]
                    gap-4
                    px-6
                    py-4
                    border-b
                    border-zinc-800
                    transition-all
                    duration-300
                    ${
                      isCurrent
                        ? "hover:bg-[#1A2233] cursor-pointer"
                        : ""
                    }
                  `}
                >
                  {/* Number */}
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle2
                        size={18}
                        className="text-green-500"
                      />
                    ) : isCurrent ? (
                      <Circle
                        size={18}
                        className="text-orange-400"
                      />
                    ) : (
                      <Lock
                        size={16}
                        className="text-zinc-600"
                      />
                    )}


                    <span className="text-xs sm:text-sm">
                      {movie.watchOrder}
                    </span>
                  </div>


                  {/* Title */}
                  <div
                    className={`
                      text-sm sm:text-base
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
                  <div>
                    <span
                      className="
                        px-2
                        py-1
                        rounded-md
                        text-[10px]
                        sm:text-xs
                        bg-zinc-800
                        border
                        border-zinc-700
                      "
                    >
                      {movie.type}
                    </span>
                  </div>

                    


                  {/* Year */}
                  <div className="text-zinc-300 text-xs sm:text-sm">
                    {movie.year}
                  </div>


                  {/* Director */}
                  <div className="text-zinc-300 text-xs sm:text-sm">
                    {movie.director}
                  </div>


                  {/* Actor */}
                  <div className="text-zinc-300 text-xs sm:text-sm">
                    {movie.actor}
                  </div>


                  {/* Country */}
                  <div className="text-zinc-300 text-xs sm:text-sm">
                    {movie.country}
                  </div>


                  {/* Status */}
                  <div>
                    {isCompleted ? (
                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          font-semibold
                          px-3
                          py-1
                          rounded-full
                          bg-green-500/20
                          text-green-400
                          border
                          border-green-500/30
                        "
                      >
                        COMPLETED
                      </span>
                    ) : isCurrent ? (
                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          font-semibold
                          px-3
                          py-1
                          rounded-full
                          bg-orange-500/20
                          text-orange-400
                          border
                          border-orange-500/30
                        "
                      >
                        NEXT
                      </span>
                    ) : (
                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          font-semibold
                          px-3
                          py-1
                          rounded-full
                          bg-zinc-800
                          text-zinc-500
                          border
                          border-zinc-700
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
      )}
    </div>
  );
}


export default FranchiseAccordion;