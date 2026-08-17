import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";

import starWarsImage from "../../images/universe/starwars/starWarsImage.jpeg";
import { starWarsData } from "../../data/universe/starWarsData";

function StarWars() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.starwars || 0;

  const total = starWarsData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= STAR WARS HERO ================= */}
        <FranchiseHero
          title="Star Wars Universe"
          subtitle="Cinematic Universe"
          image={starWarsImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= STAR WARS CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Star Wars Universe"
          content={starWarsData}
          contentId="starwars"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default StarWars;