import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { theConjuringData } from "../../data/universe/theConjuringData";
import theConjuringImage  from "../../images/universe/theconjuring/theConjuringImage.jpeg";

function TheConjuring() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.theconjuring || 0;

  const total = theConjuringData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= MCU HERO ================= */}
        <FranchiseHero
          title="Marvel Cinematic Universe"
          subtitle="Cinematic Universe"
          image={theConjuringImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= MCU CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="The Conjuring Universe"
          content={theConjuringData}
          contentId="theconjuring"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default TheConjuring;