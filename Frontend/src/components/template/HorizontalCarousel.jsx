import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import FranchiseCard from "./FranchiseCard";

function HorizontalCarousel({
  title,
  items = [],
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    const firstCard = container.querySelector(
      "[data-carousel-card]"
    );

    if (!firstCard) return;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const computedStyle =
      window.getComputedStyle(container);

    const gap =
      parseFloat(computedStyle.columnGap) ||
      parseFloat(computedStyle.gap) ||
      16;

    const amount = cardWidth + gap;

    container.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10 sm:mb-12">
      {/* ================= TITLE ================= */}
      <div className="mb-4 sm:mb-5">
        <h2
          className="
            text-[14px]
            sm:text-[17px]
            text-orange-400
          "
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
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item) => (
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
        </div>
      </div>
    </section>
  );
}

export default HorizontalCarousel;