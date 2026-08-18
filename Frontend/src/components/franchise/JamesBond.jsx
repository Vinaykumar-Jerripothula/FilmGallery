import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { jamesBondData } from "../../data/franchise/jamesBondData";
import jamesbondImage from "../../images/franchise/jamesbond/jamesbondImage.jpeg";

function JamesBond() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.jamesbond || 0;

  const total = jamesBondData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="James Bond Franchise"
          subtitle="Franchise"
          image={jamesbondImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= James Bond CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="James Bond Franchise"
          content={jamesBondData}
          contentId="jamesbond"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default JamesBond;