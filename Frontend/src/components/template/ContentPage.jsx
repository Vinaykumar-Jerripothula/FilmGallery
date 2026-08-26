import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AnimeHubPage from "../../pages/AnimeHubPage";
import ContentHero from "./ContentHero";
import ContentAccordion from "./ContentAccordion";
import { contentRegistry } from "../../data/Collection/contentRegistry";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import Navbar from "../layout/Navbar";
import { enrichedPeopleData } from "../../utils/enrichPeopleData";

function FranchisePage() {
  const { category, slug } = useParams();
  const normalizedSlug = slug.replaceAll("-", "");

  const { theme } = useTheme();
  const currentTheme = colors[theme];

  let contentItem = null;

  if (category === "actor") {
    const actor = enrichedPeopleData.actors[normalizedSlug];

    if (actor) {
      contentItem = {
        title: actor.name,
        subtitle: "Actor Filmography",
        image: actor.image,
        contentId: normalizedSlug,
        content: actor.movies,
      };
    }
  } else if (category === "director") {
    const director = enrichedPeopleData.directors[normalizedSlug];

    if (director) {
      contentItem = {
        title: director.name,
        subtitle: "Director Filmography",
        image: director.image,
        contentId: normalizedSlug,
        content: director.movies,
      };
    }
  } else {
    contentItem = contentRegistry[slug];
  }

  const progressMap = useSelector((state) => state.progress.progressMap);
  const watchedMovies = useSelector(
    (state) => state.movieProgress.watchedMovies,
  );
  if (!contentItem) {
    return (
      <div className="min-h-screen bg-[#0B0F14] text-white flex items-center justify-center">
        Content not found
      </div>
    );
  }

  const isMoviePage = category === "actor" || category === "director";
  const isAnimeHub = contentItem?.isHub;
  if (isAnimeHub) {
    return <AnimeHubPage contentItem={contentItem} />;
  }
  const watched = isMoviePage
    ? contentItem.content.filter((movie) => watchedMovies[movie.contentId])
        .length
    : progressMap[contentItem.contentId] || 0;
  const total = contentItem.content.length || 0;

  const progress = total > 0 ? Math.round((watched / total) * 100) : 0;

  return (
    <div
      className={`
      min-h-screen
      ${currentTheme.page}
      ${currentTheme.text}
    `}
    >
      <Navbar enableSearch={false} />{" "}
      <div className="pt-5 pb-5 sm:pt-5 pb-5">
        <ContentHero
          title={contentItem.title}
          subtitle={contentItem.subtitle}
          image={contentItem.image}
          watched={watched}
          total={total}
          progress={progress}
        />
        <ContentAccordion
          franchiseName={contentItem.title}
          content={contentItem.content}
          contentId={contentItem.contentId}
          completedCount={watched}
          watchedMovies={watchedMovies}
          showHeader={false}
          mode={
            category === "actor" || category === "director"
              ? "movie"
              : "franchise"
          }
        />
      </div>
    </div>
  );
}

export default FranchisePage;
