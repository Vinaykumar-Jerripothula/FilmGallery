  import { useRef } from "react";
  import { Bold, ChevronLeft, ChevronRight } from "lucide-react";
  import { useTheme } from "../../context/ThemeContext";
  import { ArrowRight } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  import FranchiseCard from "./ContentCard";

  function HorizontalCarousel({ title, items = [], showMoreRoute }) {
    const scrollRef = useRef(null);
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const navigate = useNavigate();
    const scroll = (direction) => {
      const container = scrollRef.current;

      if (!container) return;

      const firstCard = container.querySelector("[data-carousel-card]");

      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;

      const computedStyle = window.getComputedStyle(container);

      const gap =
        parseFloat(computedStyle.columnGap) ||
        parseFloat(computedStyle.gap) ||
        16;

      const amount = cardWidth + gap;

      container.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    };

    return (
      <section className="mb-8 sm:mb-8">
        {/* ================= TITLE ================= */}
        <div className="mb-4 sm:mb-5">
          <h2
            className={`
                text-[14px]
                font-semibold
                sm:text-[17px]
                ${isDark ? "text-orange-400" : " text-zinc-900"}
              `}
          >
            {title}
          </h2>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div className="relative group">
          {/* ================= LEFT ARROW ================= */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={`Scroll ${title} left`}
            className="
              hidden
              md:flex

              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-20

              w-10
              h-10

              items-center
              justify-center

              rounded-full

              bg-black/75
              border
              border-white/15
              backdrop-blur-md

              text-white

              opacity-0
              group-hover:opacity-100

              hover:bg-orange-500
              hover:border-orange-500

              transition-opacity
              duration-200
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* ================= RIGHT ARROW ================= */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={`Scroll ${title} right`}
            className="
              hidden
              md:flex

              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-20

              w-10
              h-10

              items-center
              justify-center

              rounded-full

              bg-black/75
              border
              border-white/15
              backdrop-blur-md

              text-white

              opacity-0
              group-hover:opacity-100

              hover:bg-orange-500
              hover:border-orange-500

              transition-opacity
              duration-200
            "
          >
            <ChevronRight size={22} />
          </button>

          {/* ================= CARD TRACK ================= */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-4

              overflow-x-auto
              overflow-y-hidden

              scroll-smooth
              snap-x
              snap-mandatory

              scrollbar-hide

              pb-1
              pr-27
              md:pr-0
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.slice(0,10).map((item) => (
              <div
                key={item.id}
                data-carousel-card
                className="
                  flex-shrink-0
                  snap-start

                  basis-[90%]

                  sm:basis-[70%]

                  md:basis-[calc((100%_-_48px)_/_4)]
                "
              >
                <FranchiseCard
                  title={item.title}
                  contentId={item.contentId}
                  image={item.image}
                  total={item.total}
                  route={item.route}
                />
              </div>
            ))}
            {showMoreRoute && (
              <div
                onClick={() => navigate(showMoreRoute)}
                className="
                  cursor-pointer
                  flex-shrink-0

                  w-[120px]
                  sm:w-[140px]

                  flex
                "
              >
                <div
                  className="
                    w-full
                    aspect-[16/10]

                    rounded-xl
                    border
                    border-zinc-700

                    flex flex-col
                    items-center
                    justify-center

                    transition-all
                    duration-300

                    hover:bg-white/5
                    hover:border-zinc-500
                    group
                  "
                >
                  <ArrowRight
                    size={42}
                    strokeWidth={1.5}
                    className="
                      text-zinc-500
                      group-hover:text-zinc-300
                      transition-colors
                    "
                  />

                  <span
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-zinc-400
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    Show More
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  export default HorizontalCarousel;
