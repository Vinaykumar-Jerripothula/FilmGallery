import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { planetOfTheApesData } from "../../data/franchise/planetOfTheApesData";
import planetoftheapesImage from "../../images/franchise/planetoftheapes/planetoftheapesImage.jpeg";

function PlanetOfTheApes() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.planetoftheapes || 0;

  const total = planetOfTheApesData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Planet of the Apes Franchise"
          subtitle="Franchise"
          image={planetoftheapesImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Pirates of the Caribbean CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Planet of the Apes Franchise"
          content={planetOfTheApesData}
          contentId="planetoftheapes"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default PlanetOfTheApes;