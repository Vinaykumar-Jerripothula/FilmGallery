import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { vikingsData } from "../../data/webseries/vikingsData";
import  vikingsImage  from "../../images/webseries/vikings/vikingsImage.jpeg";

function Vikings() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.vikings || 0;

  const total = vikingsData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Vikings Web Series"
          subtitle="Web series"
          image={vikingsImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Vikings Web Series"
          content={vikingsData}
          contentId="vikings"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Vikings;