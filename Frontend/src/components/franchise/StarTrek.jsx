import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { starTrekData } from "../../data/franchise/starTrekData";
import startrekImage from "../../images/franchise/startrek/startrekImage.jpeg";

function StarTrek() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.startrek || 0;

  const total = starTrekData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Star Trek Franchise"
          subtitle="Franchise"
          image={startrekImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Star Trek CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Star Trek Franchise"
          content={starTrekData}
          contentId="startrek"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default StarTrek;