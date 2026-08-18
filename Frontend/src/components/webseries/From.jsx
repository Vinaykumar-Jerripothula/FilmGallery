import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { fromData } from "../../data/webseries/fromData";
import fromImage from "../../images/webseries/from/fromImage.jpeg";

function From() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.from || 0;

  const total = fromData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="From Web Series"
          subtitle="Web series"
          image={fromImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="From Web Series"
          content={fromData}
          contentId="from"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default From;