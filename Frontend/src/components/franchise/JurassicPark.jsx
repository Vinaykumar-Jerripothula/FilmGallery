import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { jurassicParkData } from "../../data/franchise/jurassicParkData";
import jurassicparkImage from "../../images/franchise/jurassicpark/jurassicparkImage.jpeg";

function JurassicPark() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.jurassicpark || 0;

  const total = jurassicParkData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Jurassic Park Franchise"
          subtitle="Franchise"
          image={jurassicparkImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Pirates of the Caribbean CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Jurassic Park Franchise"
          content={jurassicParkData}
          contentId="jurassicpark"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default JurassicPark;