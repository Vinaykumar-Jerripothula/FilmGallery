import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FranchiseHero({
  title,
  subtitle = "Franchise Progress",
  image,
  watched = 0,
  total = 0,
  progress = 0,
}) {
  const navigate = useNavigate();

  return (
    <section className="mb-8 sm:mb-10">
      {/* ================= OUTER HERO / BANNER ================= */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-[#111318]
          shadow-xl
        "
      >
        {/* ================= BANNER AREA ================= */}
        <div
          className="
            relative
            w-full
            h-[240px]
            sm:h-[280px]
            md:h-[320px]
            lg:h-[340px]
          "
        >
          {/* ================= IMAGE ================= */}
          <img
            src={image}
            alt={title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-[center_17%]
            "
          />

          {/* ================= CINEMATIC OVERLAY ================= */}
          <div
            className="
              absolute
              inset-0
              bg-black/10
            "
          />

          {/* Bottom gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/95
              via-black/45
              to-transparent
            "
          />

          {/* ================= BACK BUTTON ================= */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              absolute
              top-3
              left-3
              sm:top-4
              sm:left-4
              z-20

              inline-flex
              items-center
              gap-1.5

              rounded-full

              border
              border-white/15

              bg-black/45
              backdrop-blur-md

              px-2.5
              py-1.5

              sm:px-3
              sm:py-2

              text-[10px]
              sm:text-xs
              md:text-sm

              font-medium
              text-white

              transition-all
              duration-200

              hover:bg-black/65
              hover:border-white/25
            "
          >
            <ArrowLeft
              size={14}
              className="sm:w-4 sm:h-4"
            />

            <span>Back</span>
          </button>

          {/* ================= BOTTOM INFORMATION ================= */}
          <div
            className="
              absolute
              left-3
              right-3
              bottom-3

              sm:left-5
              sm:right-5
              sm:bottom-5

              md:left-7
              md:right-7
              md:bottom-7

              z-20
            "
          >
            {/* Universe : Name */}
            <div
              className="
                flex
                items-center
                gap-1.5
                sm:gap-2
                min-w-0
              "
            >
              <CheckCircle2
                size={13}
                className="
                  flex-shrink-0
                  text-orange-400
                  sm:w-4
                  sm:h-4
                "
              />

              <p
                className="
                  min-w-0
                  truncate
                  text-[10px]
                  sm:text-xs
                  md:text-sm
                  leading-tight
                "
              >
                <span className="text-zinc-300">
                  {subtitle}
                </span>

                <span className="mx-1 text-zinc-500">
                  :
                </span>

                <span className="text-white">
                  {title}
                </span>
              </p>
            </div>

            {/* Watch Progress */}
            <p
              className="
                mt-2
                sm:mt-2.5

                text-[8px]
                sm:text-[10px]
                md:text-xs

                uppercase
                tracking-[0.14em]
                sm:tracking-[0.18em]

                font-medium
                text-zinc-300
              "
            >
              Watch Progress
            </p>

            {/* Count + Percentage */}
            <div
              className="
                mt-0.5
                sm:mt-1

                flex
                items-center
                justify-between
                gap-3
              "
            >
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm
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
                  text-base
                  sm:text-xl
                  md:text-2xl

                  font-extrabold
                  text-orange-400
                "
              >
                {progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              className="
                mt-2
                sm:mt-2.5

                h-1.5
                sm:h-2

                w-full
                overflow-hidden
                rounded-full

                bg-white/20
                backdrop-blur-sm
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

export default FranchiseHero;