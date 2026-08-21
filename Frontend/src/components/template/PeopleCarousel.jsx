import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonCard from "./PersonCard";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";

function PeopleCarousel({ title, items = [] }) {
  const scrollRef = useRef(null);
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const isDark = theme === "dark";

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
          {items.map((person) => (
            <PersonCard
              key={person.id}
              name={person.name}
              image={person.image}
              route={person.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeopleCarousel;
