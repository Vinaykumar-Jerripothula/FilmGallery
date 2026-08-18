import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { fastAndFuriousData } from "../../data/franchise/fastAndFuriousData";
import fastandfuriousImage from "../../images/franchise/fastandfurious/fastandfuriousImage.jpeg";

function FastAndFurious() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.fastandfurious || 0;

  const total = fastAndFuriousData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Fast & Furious Franchise"
          subtitle="Franchise"
          image={fastandfuriousImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Fast & Furious CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Fast & Furious Franchise"
          content={fastAndFuriousData}
          contentId="fastandfurious"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default FastAndFurious;