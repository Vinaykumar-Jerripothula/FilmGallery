import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { xmenData } from "../../data/universe/xmenData";
import xmenImage from "../../images/universe/xmen/xmenImage.jpeg";

function XMEN() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.xmen || 0;

  const total = xmenData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= MCU HERO ================= */}
        <FranchiseHero
          title="X-Men Universe"
          subtitle="Cinematic Universe"
          image={xmenImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= MCU CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="X-Men Universe"
          content={xmenData}
          contentId="xmen"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default XMEN;