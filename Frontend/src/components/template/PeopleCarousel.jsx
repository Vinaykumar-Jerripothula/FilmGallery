import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonCard from "./PersonCard";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function PeopleCarousel({ title, items = [], type, onShowMore }) {
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const isDark = theme === "dark";
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10 sm:mb-12">
      <div className="mb-4">
        <h2
          className={`
            text-[14px]
            sm:text-[17px]
            font-semibold
            ${isDark ? "text-orange-400" : currentTheme.text}
          `}
        >
          {title}
        </h2>
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex
            absolute left-2 top-1/2 -translate-y-1/2
            z-20 w-10 h-10
            items-center justify-center
            rounded-full
            bg-black/75 text-white
            opacity-0 group-hover:opacity-100
          "
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex
            absolute right-2 top-1/2 -translate-y-1/2
            z-20 w-10 h-10
            items-center justify-center
            rounded-full
            bg-black/75 text-white
            opacity-0 group-hover:opacity-100
          "
        >
          <ChevronRight size={22} />
        </button>

        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            scrollbar-hide
            pb-2
          "
        >
          {items.slice(0, 10).map((person) => (
            <PersonCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              route={person.route}
              slug={person.slug}
              type={type}
            />
          ))}

          <div
            onClick={() => navigate(`/category/${type}s`)}
            className="
              cursor-pointer
              flex-shrink-0
              w-[120px]
              sm:w-[140px]
            "
          >
            <div
              className="
                w-full
                h-[180px]
                sm:h-[210px]

                rounded-xl
                border
                border-zinc-700

                flex flex-col
                items-center
                justify-center

                cursor-pointer
                group

                transition-all
                duration-300

                hover:bg-white/5
                hover:border-zinc-500
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
        </div>
      </div>
    </section>
  );
}

export default PeopleCarousel;
