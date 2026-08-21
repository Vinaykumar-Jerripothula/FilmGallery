import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CheckCircle2 } from "lucide-react";

function ContentCard({ title, contentId, image, total = 0, route }) {
  const progressMap = useSelector((state) => state.progress.progressMap);

  const watched = progressMap[contentId] || 0;

  const progress = total > 0 ? Math.round((watched / total) * 100) : 0;

  return (
    <Link to={route} className="block w-full h-full">
      <div
        className="
          relative
          w-full
          aspect-[16/10]
          overflow-hidden
          rounded-xl
          border
          border-zinc-800
          bg-black
        "
      >
        {/* ================= FULL IMAGE ================= */}
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
              from-[#17191f]
              via-[#101216]
              to-[#08090b]
            "
          />
        )}

        {/* ================= CINEMATIC OVERLAY ================= */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/95
            via-black/35
            to-transparent
          "
        />

        {/* Slight overall shade */}
        <div className="absolute inset-0 bg-black/10" />

        {/* ================= PROGRESS BADGE ================= */}
        {/* <div
          className="
            absolute
            top-3
            right-3
            z-10

            px-2.5
            py-1

            rounded-full
            bg-black/75
            backdrop-blur-md

            text-orange-400
            text-xs
            font-semibold
          "
        >
          {progress}%
        </div> */}

        {/* ================= BOTTOM INFORMATION ================= */}
        <div
          className="
            absolute
            left-3
            right-3
            bottom-3

            sm:left-4
            sm:right-4
            sm:bottom-4

            z-10
          "
        >
          {/* Title */}
          <h3
            className="
                text-[10px]
                sm:text-[7px]
                md:text-[11px]
                font-medium
                text-white
                leading-tight
                truncate"
            title={title}
          >
            {title}
          </h3>

          {/* Progress Bar */}
          <div
            className="
              mt-2

              w-full
              h-1.5

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
                to-yellow-400

                transition-all
                duration-500
              "
              style={{
                width: `${Math.min(Math.max(progress, 0), 100)}%`,
              }}
            />
          </div>

          {/* Watched Count */}
          <div
            className="
              mt-1.5

              flex
              items-center
              justify-between
              gap-2
            "
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <CheckCircle2
                size={13}
                className="
                  text-green-500
                  flex-shrink-0
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  text-zinc-300
                  truncate
                "
              >
                {watched}/{total} watched
              </span>
            </div>

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                text-orange-400
                flex-shrink-0
              "
            >
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContentCard;
