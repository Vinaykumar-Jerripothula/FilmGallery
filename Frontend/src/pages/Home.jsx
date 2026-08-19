import HorizontalCarousel from "../components/template/HorizontalCarousel";
import { franchiseData } from "../data/Collection/franchiseData";
import { universeData } from "../data/Collection/universeData";
import { seriesData } from "../data/Collection/webseries";
import { duologyData } from "../data/Collection/duologyData";
import { triologyData } from "../data/Collection/triologyData";
import { tetralogyData } from "../data/Collection/tetralogyData";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import { contentRegistry } from "../data/Collection/contentRegistry";
import { allCollectionsData } from "../data/Collection/allCollectionsData";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../themes/colors";

function Home() {
  const [searchResult, setSearchResult] = useState(null);
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const searchItems = searchResult
    ? allCollectionsData.filter(
        (item) => item.contentId === searchResult.contentId,
      )
    : [];

  const isSearchFound = searchItems.length > 0;

  return (
    <div className={`min-h-screen ${currentTheme.page} ${currentTheme.text}`}>
      <Navbar setSearchResult={setSearchResult} />

      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* <div className="mb-8 sm:mb-10">
          <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight">
            Film Gallery
          </h1>

          <p className="mt-2 text-[10px] sm:text-base text-zinc-400">
            Movies, Series & Franchises
          </p>
        </div> */}

        {/* ================= SEARCH MODE ================= */}
        {searchResult ? (
          <>
            {isSearchFound ? (
              <>
                <HorizontalCarousel title="Search Result" items={searchItems} />

                {/* Back Button Centered */}
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setSearchResult(null)}
                    className="
                      px-6
                      py-3
                      rounded-lg
                      bg-orange-500
                      hover:bg-orange-600
                      text-white
                      font-medium
                      transition-colors
                    "
                  >
                    Back to Home
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                {/* Not Found Symbol */}
                <div className="text-4xl mb-6">🎬</div>

                <h2 className="text-2xl font-bold mb-3">Content Not Found</h2>

                <p className="text-zinc-400 mb-8 max-w-md">
                  We will add this movie, franchise, universe or series soon.
                </p>

                <button
                  onClick={() => setSearchResult(null)}
                  className="
                    px-6
                    py-3
                    rounded-lg
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-medium
                    transition-colors
                  "
                >
                  Back to Home
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* ================= CINEMATIC UNIVERSE ================= */}
            <HorizontalCarousel
              title="Cinematic Universe"
              items={universeData}
            />

            {/* ================= FRANCHISES ================= */}
            <HorizontalCarousel title="Franchises" items={franchiseData} />

            <HorizontalCarousel title="TV / Web Series" items={seriesData} />

            <HorizontalCarousel title="Duology" items={duologyData} />

            <HorizontalCarousel title="Trilogy" items={triologyData} />

            <HorizontalCarousel title="Tetralogy" items={tetralogyData} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
