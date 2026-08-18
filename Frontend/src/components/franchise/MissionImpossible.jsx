import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import {missionImpossibleData } from "../../data/franchise/missionImpossibleData";
import missionimpossibleImage from "../../images/franchise/missionimpossible/missionimpossibleImage.jpeg";

function MissionImpossible() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.missionimpossible || 0;

  const total = missionImpossibleData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Mission Impossible Franchise"
          subtitle="Franchise"
          image={missionimpossibleImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Mission Impossible CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Mission Impossible Franchise"
          content={missionImpossibleData}
          contentId="missionimpossible"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default MissionImpossible;