import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";
import { darkData } from "../../data/webseries/darkData";
import darkImage from "../../images/webseries/dark/darkImage.jpeg";

function Dark() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.dark || 0;

  const total = darkData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Dark Web Series"
          subtitle="Web series"
          image={darkImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Dark Web Series"
          content={darkData}
          contentId="dark"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Dark;