import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ContentCard from "../components/template/ContentCard";
import { contentRegistry } from "../data/Collection/contentRegistry";

function AnimeHubPage({ contentItem }) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-start gap-4">
            <div className="w-1 h-14 bg-orange-500 rounded-full mt-1" />

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-zinc-400
                  mb-1
                  mt-2
                "
              >
                {contentItem?.type?.toLowerCase()?.includes("universe")
                  ? "Anime Universe"
                  : "Anime Franchise"}
              </p>

              <h1
                className="
                  text-2xl
                  font-bold
                  leading-tight
                "
              >
                {contentItem.title}
              </h1>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {contentItem.content
            .filter((section) => {
              const hubContent = contentRegistry[section.slug];

              return hubContent?.content?.length > 0;
            })
            .map((section) => (
              <ContentCard
                key={section.id}
                title={section.title}
                image={section.image}
                contentId={section.contentId}
                total={section.content?.length || 0}
                route={`/anime/franchise/${section.slug}`}
              />
            ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            onClick={() => navigate(-1)}
            className="
              px-7
              py-1
              rounded-lg
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-medium
              transition-colors
            "
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default AnimeHubPage;
