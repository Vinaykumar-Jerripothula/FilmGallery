import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import  { piratesOfTheCaribbeanData } from "../../data/franchise/piratesOfTheCaribbeanData";
import piratesofthecaribbeanImage from "../../images/franchise/piratesofcarabbean/pofcImage.jpeg";

function PiratesOfTheCaribbean() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  // Progress for the complete MCU is stored under the "mcu" contentId.
  const watched = progressMap.pofc || 0;

  const total = piratesOfTheCaribbeanData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        {/* ================= DCU HERO ================= */}
        <FranchiseHero
          title="Pirates Of The Caribbean Franchise"
          subtitle="Franchise"
          image={piratesofthecaribbeanImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        {/* ================= Pirates of the Caribbean CONTENT ================= */}
        <FranchiseAccordion
          franchiseName="Pirates Of The Caribbean Franchise"
          content={piratesOfTheCaribbeanData}
          contentId="piratesofthecaribbean"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default PiratesOfTheCaribbean;