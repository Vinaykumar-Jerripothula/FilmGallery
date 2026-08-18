import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { harryPotterData } from "../../data/franchise/harryPotterData";
import harrypotterImage from "../../images/franchise/harrypotter/harrypotterImage.jpeg";

function HarryPotter() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.harrypotter || 0;

  const total = harryPotterData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Haryy Potter Franchise"
          subtitle="Franchise"
          image={harrypotterImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= John Wick CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Harry Potter Franchise"
          content={harryPotterData}
          contentId="harrypotter"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default HarryPotter;