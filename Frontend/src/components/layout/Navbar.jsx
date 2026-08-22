import { useState } from "react";
import { Search, X } from "lucide-react";
import { searchData } from "../../data/search/searchData";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import { useLocation } from "react-router-dom";

function Navbar({ setSearchResult, setSelectedSection, enableSearch = true }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { theme, toggleTheme } = useTheme();
  const currentTheme = colors[theme];
  const isDark = theme === "dark";
  const username = localStorage.getItem("username") || "User";
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (!search.trim()) return;
    const query = search.toLowerCase().trim();

    const result = searchData.find((item) =>
      item.title.toLowerCase().includes(query),
    );

    if (result) {
      setSearchResult(result);
    } else {
      setSearchResult({
        title: search,
        contentId: "__not_found__",
      });
    }

    setShowSearch(false);
    setResults([]);
    setSearch("");
  };

  const email = localStorage.getItem("email") || "user@email.com";
  const menuItemClass = `
                w-full
                px-4
                py-2
                text-[12px]
                flex
                items-center
                justify-between
                transition-colors
                `;
  return (
    <>
      <nav
        className={`sticky top-0 mb-1 z-50 ${currentTheme.page} ${currentTheme.border} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                className={`text-2xl ${isDark ? "text-white" : "text-black"}`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                ☰
              </button>
            </div>

            <h1
              className={`font-bold text-xl cursor-pointer ${currentTheme.text}`}
            >
              Film Gallery
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Desktop Search */}
            {enableSearch && (
              <div className="hidden lg:flex items-center relative">
                {" "}
                <div
                  className={`
                   w-72
                   h-10
                                
                   ${currentTheme.card}
                                
                   border
                   ${currentTheme.border}
                                
                   rounded-xl
                                
                   overflow-hidden
                                
                   transition-all
                   duration-300
                                
                   focus-within:border-orange-500/40
                   focus-within:shadow-[0_0_20px_rgba(249,115,22,0.15)]
                `}
                >
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSearch(value);

                      if (!value.trim()) {
                        setResults([]);
                        return;
                      }
                      const matches = searchData.filter((item) =>
                        item.title.toLowerCase().includes(value.toLowerCase()),
                      );
                      setResults(matches);
                      setSelectedIndex(-1);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();

                        setSelectedIndex((prev) =>
                          prev < results.slice(0, 8).length - 1
                            ? prev + 1
                            : prev,
                        );
                      }

                      if (e.key === "ArrowUp") {
                        e.preventDefault();

                        setSelectedIndex((prev) =>
                          prev > 0 ? prev - 1 : prev,
                        );
                      }

                      if (e.key === "Enter") {
                        e.preventDefault();

                        if (selectedIndex >= 0) {
                          setSearchResult(results[selectedIndex]);

                          setResults([]);
                          setSearch("");
                          setSelectedIndex(-1);
                        } else {
                          handleSearch();
                        }
                      }
                    }}
                    placeholder="Search movies, series..."
                    className={`
                       w-full
                       h-full

                       px-4

                       bg-transparent

                       text-sm
                       ${currentTheme.text}

                       placeholder:text-zinc-500

                       outline-none
                      `}
                  />
                </div>
                {results.length > 0 && (
                  <div
                    className={`
                        absolute
                        top-12
                        w-72
                        ${currentTheme.card}
                        border
                        ${currentTheme.border}
                        rounded-xl
                        overflow-hidden
                        z-50
                    `}
                  >
                    {results.slice(0, 8).map((item, index) => (
                      <button
                        key={`${item.title}-${item.type}-${index}`}
                        onClick={() => {
                          setSearchResult(item);
                          setResults([]);
                          setSearch("");
                        }}
                        className={`
                        w-full
                        text-left
                        px-4
                        py-3
                        transition
                        ${
                          selectedIndex === index
                            ? "bg-zinc-500 text-white"
                            : `${currentTheme.text} ${
                                theme === "dark"
                                  ? "hover:bg-zinc-800"
                                  : "hover:bg-zinc-200"
                              }`
                        }
                      `}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=universes");
                  } else {
                    setSelectedSection("universes");
                  }
                }}
                className={`
                  ${isDark ? "text-zinc-300" : "text-zinc-700"}
                  hover:text-orange-400
                  text-[13.5px]
                  font-semibold
                  transition
                `}
              >
                Universes
              </button>

              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=franchises");
                  } else if (setSelectedSection) {
                    setSelectedSection("franchises");
                  }
                }}
                className={`
                    ${isDark ? "text-zinc-300" : "text-zinc-700"}
                  hover:text-orange-400
                    text-[13.5px]
                    font-semibold
                    transition
                  `}
              >
                Franchises
              </button>

              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=series");
                  } else if (setSelectedSection) {
                    setSelectedSection("series");
                  }
                }}
                className={`
                  ${isDark ? "text-zinc-300" : "text-zinc-700"}
                  hover:text-orange-400
                  text-[13.5px]
                  font-semibold
                  transition
                `}
              >
                Web Series
              </button>

              <button
                className={`
                  ${isDark ? "text-zinc-300" : "text-zinc-700"}
                  hover:text-orange-400
                  text-[13.5px]
                  font-semibold
                  transition
                `}
              >
                Top 250 Movies
              </button>

              <button
                className={`
                  ${isDark ? "text-zinc-300" : "text-zinc-700"}
                  hover:text-orange-400
                  transition
                `}
              ></button>
            </div>

            {/* Mobile Search */}
            {enableSearch && (
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden px-1 pt-1 text-zinc-400 hover:text-orange-400 transition"
              >
                {showSearch ? <X size={22} /> : <Search size={22} />}
              </button>
            )}

            {/* Avatar */}
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="
                  w-10 h-10
                  rounded-full
                  bg-gradient-to-br
                  from-orange-500
                  to-orange-700
                  text-white
                  font-bold
                  flex items-center justify-center
                  shadow-lg shadow-orange-500/20
                "
              >
                {username.charAt(0).toUpperCase()}
              </button>

              {/* Premium Dropdown */}
              {showProfile && (
                <div
                  className={`
                   absolute
                   right-0
                   top-14
                   h-100
                   w-68

                   ${theme === "dark" ? "bg-[#0D1117]/95 border-white/10" : "bg-white border-zinc-300"}

                   backdrop-blur-xl

                   border

                   rounded-2xl

                   shadow-[0_20px_60px_rgba(0,0,0,0.15)]

                   overflow-hidden
                  `}
                >
                  {/* Header */}
                  <div
                    className={`
                        p-4
                        text-center
                        border-b
                        ${isDark ? "border-white/10" : "border-zinc-200"}
                      `}
                  >
                    <div
                      className="
                        w-20 h-20
                        mx-auto
                        rounded-full
                        bg-gradient-to-br
                        from-orange-500
                        to-orange-700

                        flex
                        items-center
                        justify-center

                        text-2xl
                        font-bold
                        text-white

                        shadow-lg
                        shadow-orange-500/20
                      "
                    >
                      {username.charAt(0).toUpperCase()}
                    </div>

                    <h3
                      className={`
                        mt-3
                        text-lg
                        font-semibold
                        ${isDark ? "text-white" : "text-black"}
                      `}
                    >
                      {username}
                    </h3>

                    <p
                      className={`
                          text-sm
                          truncate
                          ${isDark ? "text-zinc-400" : "text-zinc-500"}
                        `}
                    />
                  </div>

                  {/* Menu */}
                  <button
                    className={`
                        ${menuItemClass}
                        ${
                          isDark
                            ? "text-zinc-300 hover:bg-white/5 hover:text-white"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                        }
                      `}
                  >
                    <span className="flex items-center gap-3">My Profile</span>

                    <span>›</span>
                  </button>

                  <button
                    className={`
                        ${menuItemClass}
                        ${
                          isDark
                            ? "text-zinc-300 hover:bg-white/5 hover:text-white"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                        }
                      `}
                  >
                    <span className="flex items-center gap-3">Settings</span>

                    <span>›</span>
                  </button>

                  <button
                    onClick={() => {
                      toggleTheme();
                    }}
                    className={`
                        ${menuItemClass}
                        ${
                          isDark
                            ? "text-zinc-300 hover:bg-white/5 hover:text-white"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                        }
                      `}
                  >
                    <span className="flex items-center gap-3">Theme</span>

                    <span>{theme === "dark" ? "🌙" : "☀️"}</span>
                  </button>

                  <button
                    className={`
                        ${menuItemClass}
                        ${
                          isDark
                            ? "text-zinc-300 hover:bg-white/5 hover:text-white"
                            : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                        }
                      `}
                  >
                    <span className="flex items-center gap-3">Statistics</span>

                    <span>›</span>
                  </button>

                  <button
                    className={`
                          ${menuItemClass}
                          ${
                            isDark
                              ? "text-zinc-300 hover:bg-white/5 hover:text-white"
                              : "text-zinc-700 hover:bg-zinc-100 hover:text-black"
                          }
                        `}
                  >
                    <span className="flex items-center gap-3">Favorites</span>

                    <span>›</span>
                  </button>

                  {/* Logout */}
                  <div className="p-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        localStorage.clear();
                        navigate("/login");
                      }}
                      className={`
                            w-full
                            py-1

                            rounded-xl

                            ${
                              isDark
                                ? "bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20"
                                : "bg-red-50 border border-red-200 text-red-600 hover:bg-red-600 hover:text-white"
                            }
                          
                            font-medium
                          
                            transition-all
                            duration-300
                          `}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div
          className={`
            md:hidden
            ${currentTheme.page}
            px-4
            pt-3
            pb-2
          `}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => {
              const value = e.target.value;

              setSearch(value);

              if (!value.trim()) {
                setResults([]);
                return;
              }

              const matches = searchData.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase()),
              );

              setResults(matches);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                setSelectedIndex((prev) =>
                  prev < results.length - 1 ? prev + 1 : prev,
                );
              }

              if (e.key === "ArrowUp") {
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
              }

              if (e.key === "Enter") {
                if (selectedIndex >= 0) {
                  setSearchResult(results[selectedIndex]);

                  setResults([]);
                  setSearch("");
                  setSelectedIndex(-1);
                  setShowSearch(false);
                } else {
                  handleSearch();
                }
              }
            }}
            placeholder="Search movies, series..."
            autoFocus
            className={`
               w-full
               h-11

               px-4

               ${currentTheme.card}

               border
               ${currentTheme.border}

               rounded-xl

               ${currentTheme.text}
               text-sm

               placeholder:text-zinc-500

               outline-none

               focus:border-orange-500/40
              `}
          />
          {results.length > 0 && (
            <div
              className={`
                mt-2
                ${currentTheme.card}
                border
                ${currentTheme.border}
                rounded-xl
                overflow-hidden
              `}
            >
              {results.slice(0, 8).map((item, index) => (
                <button
                  key={`${item.title}-${item.type}-${index}`}
                  onClick={() => {
                    setSearchResult(item);

                    setResults([]);
                    setSearch("");
                    setShowSearch(false);
                  }}
                  className={`
                      w-full
                      text-left
                      px-4
                      py-3
                      transition
                      ${
                        selectedIndex === index
                          ? "bg-zinc-500 text-white"
                          : `${currentTheme.text} ${
                              isDark ? "hover:bg-zinc-800" : "hover:bg-zinc-200"
                            }`
                      }
                    `}
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Sidebar */}
      {showMobileMenu && (
        <>
          {/* Overlay */}
          <div
            className="
        fixed inset-0
        bg-black/70
        backdrop-blur-sm
        z-40
      "
            onClick={() => setShowMobileMenu(false)}
          />

          {/* Drawer */}
          <div
            className={`
                fixed
                top-0
                left-0
                          
                h-full
                w-72
                          
                ${currentTheme.card}
                          
                border-r
                ${currentTheme.border}
                          
                shadow-[0_20px_80px_rgba(0,0,0,0.15)]
                          
                z-50
                          
                overflow-hidden
              `}
          >
            {/* Header */}
            <div
              className={`
                  h-16
                  px-6
                  flex
                  items-center
                  justify-between
                  border-b
                  ${isDark ? "border-white/10" : "border-zinc-200"}
                `}
            >
              <h2
                className={`
                  text-xl
                  font-bold
                  tracking-tight
                  ${currentTheme.text}
                `}
              >
                Film Gallery
              </h2>

              <button
                className={`text-2xl ${currentTheme.text}`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              ></button>
              <button
                className={`${currentTheme.text}`}
                onClick={() => setShowMobileMenu(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <div className="pt-5">
              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=universes");
                  } else if (setSelectedSection) {
                    setSelectedSection("universes");
                  }

                  setShowMobileMenu(false);
                }}
                className={`
                  group
                  relative
                  w-full
                  px-6
                  py-4
                  text-left
                  text-[15px]
                  font-medium
                  tracking-wide
                  ${
                    isDark
                      ? "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  }
                  transition-all
                  duration-300
                `}
              >
                <span
                  className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2

              h-6
              w-[2px]

              bg-orange-500

              opacity-0
              group-hover:opacity-100

              transition-all
            "
                />

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Universes
                </span>
              </button>

              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=franchises");
                  } else if (setSelectedSection) {
                    setSelectedSection("franchises");
                  }

                  setShowMobileMenu(false);
                }}
                className={`
                    group
                    relative
                    w-full
                    px-6
                    py-4

                    text-left

                    text-[15px]
                    font-medium
                    tracking-wide

                    ${
                      isDark
                        ? "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                        : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                    }
                  
                    transition-all
                    duration-300
                  `}
              >
                <span
                  className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2

              h-6
              w-[2px]

              bg-orange-500

              opacity-0
              group-hover:opacity-100

              transition-all
            "
                />

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Franchises
                </span>
              </button>

              <button
                onClick={() => {
                  if (location.pathname !== "/home") {
                    navigate("/home?section=series");
                  } else if (setSelectedSection) {
                    setSelectedSection("series");
                  }

                  setShowMobileMenu(false);
                }}
                className={`
                  group
                  relative
                  w-full
                  px-6
                  py-4

                  text-left

                  text-[15px]
                  font-medium
                  tracking-wide

                  ${
                    isDark
                      ? "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  }
                
                  transition-all
                  duration-300
                `}
              >
                <span
                  className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2

              h-6
              w-[2px]

              bg-orange-500

              opacity-0
              group-hover:opacity-100

              transition-all
            "
                />

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Series
                </span>
              </button>

              <button
                className={`
                  group
                  relative
                  w-full
                  px-6
                  py-4
                                
                  text-left
                                
                  text-[15px]
                  font-medium
                  tracking-wide
                                
                  ${
                    isDark
                      ? "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                      : "text-zinc-700 hover:text-black hover:bg-zinc-100"
                  }
                
                  transition-all
                  duration-300
                `}
              >
                <span
                  className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2

              h-6
              w-[2px]

              bg-orange-500

              opacity-0
              group-hover:opacity-100

              transition-all
            "
                />

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Movies
                </span>
              </button>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                Film Gallery
              </p>

              <p className="mt-2 text-xs text-zinc-500">
                Movies • Series • Franchises
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
