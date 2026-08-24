import HorizontalCarousel from "../components/template/HorizontalCarousel";
import { franchiseData } from "../data/Collection/franchiseData";
import { universeData } from "../data/Collection/universeData";
import { seriesData } from "../data/Collection/webseries";
import { duologyData } from "../data/Collection/duologyData";
import { triologyData } from "../data/Collection/trilogyData";
import { tetralogyData } from "../data/Collection/tetralogyData";
import { directorsData } from "../data/people/directorsData";
import { actorsData } from "../data/people/actorsData";
import { peopleData } from "../data/people/peopleData";

import PeopleCarousel from "../components/template/PeopleCarousel";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import { contentRegistry } from "../data/Collection/contentRegistry";
import { allCollectionsData } from "../data/Collection/allCollectionsData";
import { useTheme } from "../context/ThemeContext";
import { colors } from "../themes/colors";
import CardGrid from "../components/template/CardGrid";
import { useSearchParams } from "react-router-dom";
import PersonCard from "../components/template/PersonCard";
import { mcuData } from "../data/universe/mcuData";
import { allContentItems } from "../data/Collection/allContentItems";

function Home() {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams] = useSearchParams();
  const [selectedSection, setSelectedSection] = useState(
    searchParams.get("section") || "home",
  );


  const sectionData = {
    universes: {
      title: "All Universes",
      items: universeData,
    },

    franchises: {
      title: "All Franchises",
      items: franchiseData,
    },

    series: {
      title: "All Web Series",
      items: seriesData,
    },

    directors: {
      title: "All Directors",
      items: directorsData,
    },

    actors: {
      title: "All Actors",
      items: actorsData,
    },
  };
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  const searchItems = searchResult
    ? allCollectionsData.filter(
        (item) => item.contentId === searchResult.contentId,
      )
    : [];
  const matchingActors =
    searchResult?.type === "movie"
      ? actorsData.filter((actorCard) => {
          const actor = peopleData.actors[actorCard.slug];

          return actor?.movies.some(
            (movie) =>
              movie.title.toLowerCase() === searchResult.title.toLowerCase(),
          );
        })
      : [];

  const matchingDirectors =
    searchResult?.type === "movie"
      ? directorsData.filter((directorCard) => {
          const director = peopleData.directors[directorCard.slug];

          return director?.movies.some(
            (movie) =>
              movie.title.toLowerCase() === searchResult.title.toLowerCase(),
          );
        })
      : [];

  const isSearchFound = searchItems.length > 0;
  const actorMatch =
    searchResult?.type === "actor"
      ? actorsData.find(
          (actor) =>
            actor.name.toLowerCase() === searchResult.title.toLowerCase(),
        )
      : null;
  const directorMatch =
    searchResult?.type === "director"
      ? directorsData.find(
          (director) =>
            director.name.toLowerCase() === searchResult.title.toLowerCase(),
        )
      : null;

  const movieMatch =
    searchResult?.type === "movie"
      ? allContentItems.find(
          (item) => item.contentId === searchResult.contentId,
        )
      : null;

  const collectionItems = movieMatch
    ? allCollectionsData.filter(
        (item) => item.contentId === movieMatch.collectionId,
      )
    : [];

  return (
    <div className={`min-h-screen ${currentTheme.page} ${currentTheme.text}`}>
      <Navbar
        setSearchResult={setSearchResult}
        setSelectedSection={setSelectedSection}
      />

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
            {searchResult.type === "movie" ? (
              <>
                <div className="mb-8 border-l-4 border-orange-500 pl-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Movie
                  </p>

                  <h1 className="sm:text-2xl text-[17px] font-bold">
                    {searchResult.title}
                  </h1>
                </div>

                {/* Universe / Franchise */}
                {collectionItems.length > 0 && (
                  <div className="mb-10">
                    <HorizontalCarousel
                      title="Cinematic Universe"
                      items={collectionItems}
                    />
                  </div>
                )}

                {/* Actor + Director */}
                {(matchingActors.length > 0 ||
                  matchingDirectors.length > 0) && (
                  <div>
                    <div className="flex gap-8 flex-wrap">
                      {matchingActors.length > 0 && (
                        <div>
                          <div className="mb-4 border-l-4 border-orange-500 pl-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                              Actor
                            </p>

                            <h4 className="text-lg font-bold">
                              {matchingActors[0].name}
                            </h4>
                          </div>
                          <PersonCard
                            name={matchingActors[0].name}
                            id={matchingActors[0].id}
                            image={matchingActors[0].image}
                            route={matchingActors[0].route}
                            slug={matchingActors[0].slug}
                            type="actor"
                          />
                        </div>
                      )}

                      {matchingDirectors.length > 0 && (
                        <div>
                          <div className="mb-4 border-l-4 border-orange-500 pl-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                              Director
                            </p>

                            <h4 className="text-lg font-bold">
                              {matchingDirectors[0].name}
                            </h4>
                          </div>
                          <PersonCard
                            name={matchingDirectors[0].name}
                            id={matchingDirectors[0].id}
                            image={matchingDirectors[0].image}
                            route={matchingDirectors[0].route}
                            slug={matchingDirectors[0].slug}
                            type="director"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-center mt-20">
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
            ) : searchResult.type === "actor" ? (
              <>
                <div className="mb-8 border-l-4 border-orange-500 pl-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {searchResult.type}
                  </p>

                  <h1 className="text-3xl font-bold">{searchResult.title}</h1>
                </div>

                {actorMatch && (
                  <PersonCard
                    name={actorMatch.name}
                    id={actorMatch.id}
                    image={actorMatch.image}
                    route={actorMatch.route}
                    slug={actorMatch.slug}
                    type="actor"
                  />
                )}

                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setSearchResult(null)}
                    className="
                      px-6
                      py-3
                      mt-15
                      sm:mt-10
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
            ) : searchResult.type === "director" ? (
              <>
                <div className="mb-8 border-l-4 border-orange-500 pl-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {searchResult.type}
                  </p>

                  <h1 className="text-3xl font-bold">{searchResult.title}</h1>
                </div>

                {directorMatch && (
                  <PersonCard
                    name={directorMatch.name}
                    image={directorMatch.image}
                    route={directorMatch.route}
                    slug={directorMatch.slug}
                    type="director"
                  />
                )}

                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setSearchResult(null)}
                    className="
          px-6
          py-3
          mt-15
          sm:mt-10
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
            {selectedSection === "home" && (
              <>
                <HorizontalCarousel
                  title="Cinematic Universe"
                  items={universeData}
                />

                <HorizontalCarousel title="Franchises" items={franchiseData} />

                <HorizontalCarousel
                  title="TV / Web Series"
                  items={seriesData}
                />

                <HorizontalCarousel title="Duology" items={duologyData} />

                <HorizontalCarousel title="Trilogy" items={triologyData} />

                <HorizontalCarousel title="Tetralogy" items={tetralogyData} />

                <PeopleCarousel
                  title="Directors"
                  items={directorsData}
                  type="director"
                  onShowMore={() => setSelectedSection("directors")}
                />

                <PeopleCarousel
                  title="Actors"
                  items={actorsData}
                  type="actor"
                  onShowMore={() => setSelectedSection("actors")}
                />
                <div className="mt-12 mb-4 flex justify-center items-center gap-4 text-sm sm:text-base">
  <a
    href="https://t.me/ProSearchM11Bot"
    target="_blank"
    rel="noopener noreferrer"
    className={`${currentTheme.text} hover:text-orange-500 transition-colors font-medium`}
  >
    Watch Movies
  </a>

  <span className="text-zinc-900"> & </span>

  <a
    href="https://t.me/ProSearchY11Bot"
    target="_blank"
    rel="noopener noreferrer"
    className={`${currentTheme.text} hover:text-orange-500 transition-colors font-medium`}
  >
    Watch Web Series
  </a>
</div>
              </>
            )}

            {selectedSection !== "home" && (
              <>
                {selectedSection === "directors" ||
                selectedSection === "actors" ? (
                  <>
                    <h2 className="text-xl sm:text-2xl font-bold mb-6">
                      {sectionData[selectedSection].title}
                     </h2>

                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {" "}
                      {sectionData[selectedSection].items.map((person) => (
                        <PersonCard
                          key={person.id}
                          id={person.id}
                          name={person.name}
                          image={person.image}
                          route={person.route}
                          slug={person.slug}
                          type={
                            selectedSection === "directors"
                              ? "director"
                              : "actor"
                          }
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <CardGrid
                    title={sectionData[selectedSection].title}
                    items={sectionData[selectedSection].items}
                  />
                )}

                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setSelectedSection("home")}
                    className="
                      px-4
                      py-1
                      sm:h-10
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
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
