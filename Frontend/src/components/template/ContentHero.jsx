
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";

function ContentHero({
  title,
  subtitle = "Cinematic Universe",
  image,
  watched = 0,
  total = 0,
  progress = 0,
}) {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentTheme = colors[theme];

  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0),
  );

  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset =
    circumference - (safeProgress / 100) * circumference;

  return (
    <section className="w-full px-3 sm:px-5">
      {/* Main progress card */}
      <div
        className={`
          mx-auto
          w-full
          max-w-[400px]
          overflow-hidden
          rounded-2xl
          border
          shadow-2xl
          ${currentTheme.border}
          bg-[#17191F]
        `}
      >
        {/* MOBILE LAYOUT */}
        <div className="sm:hidden">
          {/* Image with overlaid information */}
          <div className="relative h-[250px] overflow-hidden rounded-xl bg-[#111318]">
            {image ? (
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            )}

            {/* Image overlay for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

            {/* Back button */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="
                absolute left-3 top-3 z-10
                inline-flex items-center gap-1.5
                rounded-full border border-white/15
                bg-black/60 px-3 py-1.5
                text-xs font-medium text-white
                backdrop-blur-md
                transition hover:bg-black/80
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-orange-400
              "
            >
              <ArrowLeft size={14} />
              Back
            </button>

            {/* Bottom information */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-3.5">
              {/* Content name */}
              <h1
                className="mb-3 text-base font-bold leading-tight text-white  [overflow-wrap:anywhere]"
                title={title}
              >
                {title}
              </h1>

              {/* Watched count and percentage */}
              <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                <p className="min-w-0 truncate text-zinc-200">
                  <span className="font-semibold text-orange-400">
                    {watched}
                  </span>
                  <span className="mx-1 text-zinc-400">/</span>
                  <span>{total} watched</span>
                </p>

                <span className="shrink-0 font-bold text-orange-400">
                  {Math.round(safeProgress)}%
                </span>
              </div>

              {/* Horizontal progress bar */}
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-white/25"
                role="progressbar"
                aria-label="Watch progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(safeProgress)}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-[width] duration-700 ease-out"
                  style={{ width: `${safeProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT — preserved */}
        <div className="hidden sm:block">
          {/* Back button above the image */}
          <div className="bg-[#17191F] px-3 pt-3 sm:px-3.5 sm:pt-3.5">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="
                inline-flex items-center gap-1.5
                rounded-full border border-white/10
                bg-[#22252D] px-3 py-1.5
                text-xs font-medium text-zinc-200
                transition hover:bg-[#2D313B]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-orange-400
              "
            >
              <ArrowLeft size={14} />
              Back
            </button>
          </div>

          {/* Hero image */}
          <div className="bg-[#17191F] px-3 pb-3 pt-2 sm:px-3.5 sm:pb-3.5">
            <div className="relative h-[240px] overflow-hidden rounded-xl border border-white/10 bg-[#111318] shadow-lg">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
              )}
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col items-center border-t border-white/10 bg-[#17191F] px-4 pb-6 pt-5 sm:pb-7">
            {/* Content name */}
            <h1 className="mb-4 text-center text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl [overflow-wrap:anywhere]">
              {title}
            </h1>

            {/* Watched count */}
            <p className="mb-5 text-sm font-medium text-zinc-300">
              <span className="font-bold text-orange-400">
                {watched}
              </span>
              <span className="mx-1.5 text-zinc-500">/</span>
              <span className="font-semibold text-white">
                {total}
              </span>
              <span className="ml-1.5">titles watched</span>
            </p>

            {/* Circular progress indicator */}
            <div
              className="relative aspect-square w-[150px] shrink-0"
              role="progressbar"
              aria-label="Watch progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(safeProgress)}
            >
              <svg
                viewBox="0 0 112 112"
                className="h-full w-full -rotate-90"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="content-hero-progress-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  fill="none"
                  stroke="rgba(161,161,170,0.25)"
                  strokeWidth="7"
                />

                <circle
                  cx="56"
                  cy="56"
                  r={radius}
                  fill="none"
                  stroke="url(#content-hero-progress-gradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset}
                  className="transition-[stroke-dashoffset] duration-700 ease-out"
                />
              </svg>

              {/* Percentage inside circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-3xl font-bold leading-none tracking-tight text-orange-400 sm:text-4xl">
                  {Math.round(safeProgress)}%
                </p>

                <span className="mt-2 text-[10px] font-medium text-zinc-400">
                  Watched
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentHero;
