import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import dceuImage from "../../images/universe/dceu/dceuImage.jpeg";
import { dceuData } from "../../data/universe/dcExtendedUniverseData";

function DCEU() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.dceu || 0;

  const total = dceuData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= MCU HERO ================= */}
        <FranchiseHero
          title="Detective Comics Universe"
          subtitle="Cinematic Universe"
          image={dceuImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= MCU CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Marvel Cinematic Universe"
          content={dceuData}
          contentId="dceu"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default DCEU;