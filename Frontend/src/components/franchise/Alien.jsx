import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { alienData } from "../../data/franchise/alienData";
import alienImage from "../../images/franchise/alien/alienImage.jpeg";

function Alien() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.alien || 0;

  const total = alienData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Alien Franchise"
          subtitle="Franchise"
          image={alienImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Alien CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Alien Franchise"
          content={alienData}
          contentId="alien"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Alien;