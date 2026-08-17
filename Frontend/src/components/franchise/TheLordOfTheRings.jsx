import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";

import { lordOfTheRingsData } from "../../data/franchise/lordOfTheRingsData";
import lordofringsImage from "../../images/franchise/lordofrings/lordofringsImage.jpeg";

function TheLordOfTheRings() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.lordoftherings || 0;

  const total = lordOfTheRingsData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Lord of the Rings Franchise"
          subtitle="Franchise"
          image={lordofringsImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Lord of Rings Franchise"
          content={lordOfTheRingsData}
          contentId="lordoftherings"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default TheLordOfTheRings;