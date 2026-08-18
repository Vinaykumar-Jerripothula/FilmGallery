import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ContentHero({
  title,
  subtitle = "Franchise Progress",
  image,
  watched = 0,
  total = 0,
  progress = 0,
}) {
  const navigate = useNavigate();

  return (
    <section className="mb-6 sm:mb-8 max-w-5xl mx-auto px-3 sm:px-5">
      <div
        className="
          relative
          w-full
          max-w-[98%]
          mx-auto
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-[#111318]
          shadow-xl
        "
      >
        <div
          className="
            relative
            w-full
            h-[180px]
            sm:h-[200px]
            md:h-[230px]
            lg:h-[320px]
          "
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
              "
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-zinc-800
                via-zinc-900
                to-black
              "
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/95
              via-black/50
              to-transparent
            "
          />

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              absolute
              top-2
              left-2
              sm:top-3
              sm:left-3
              z-20

              inline-flex
              items-center
              gap-1

              rounded-full
              border
              border-white/15

              bg-black/50
              backdrop-blur-md

              px-2
              py-1

              text-[9px]
              sm:text-[10px]

              font-medium
              text-white

              hover:bg-black/70
              transition
            "
          >
            <ArrowLeft size={12} />
            <span>Back</span>
          </button>

          {/* Content */}
          <div
            className="
              absolute
              left-3
              right-3
              bottom-2

              sm:left-4
              sm:right-4
              sm:bottom-3

              md:left-5
              md:right-5
              md:bottom-4

              z-20
            "
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                size={12}
                className="text-orange-400 flex-shrink-0"
              />

              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  md:text-xs
                  text-white
                  truncate
                "
              >
                <span className="text-zinc-300">
                  {subtitle}
                </span>

                <span className="mx-1 text-zinc-500">
                  :
                </span>

                <span>{title}</span>
              </p>
            </div>

            <p
              className="
                mt-1

                text-[7px]
                sm:text-[8px]
                md:text-[10px]

                uppercase
                tracking-[0.18em]
                text-zinc-300
              "
            >
              Watch Progress
            </p>

            <div
              className="
                mt-1
                flex
                items-center
                justify-between
              "
            >
              <p
                className="
                  text-[8px]
                  sm:text-[9px]
                  md:text-[11px]
                  text-zinc-200
                "
              >
                <span className="font-semibold text-white">
                  {watched}
                </span>

                <span className="text-zinc-400">
                  {" "}
                  / {total} watched
                </span>
              </p>

              <span
                className="
                  text-sm
                  sm:text-lg
                  md:text-xl
                  font-extrabold
                  text-orange-400
                "
              >
                {progress}%
              </span>
            </div>

            <div
              className="
                mt-1.5
                h-1.5
                w-full
                overflow-hidden
                rounded-full
                bg-white/20
              "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  via-orange-400
                  to-yellow-400
                  transition-all
                  duration-700
                "
                style={{
                  width: `${Math.min(
                    Math.max(progress, 0),
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentHero;