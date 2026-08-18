import { useSelector } from "react-redux";

import FranchiseHero from "../template/FranchiseHero";
import FranchiseAccordion from "../template/FranchiseAccordion";

import { transformersData } from "../../data/franchise/transformersData";
import transformersImage from "../../images/franchise/transformers/transformersImage.jpeg";

function Transformers() {
  const progressMap = useSelector(
    (state) => state.progress.progressMap
  );

  const watched = progressMap.transformers || 0;

  const total = transformersData.length;

  const progress =
    total > 0
      ? Math.round((watched / total) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

        <FranchiseHero
          title="Transformers Franchise"
          subtitle="Franchise"
          image={transformersImage}
          watched={watched}
          total={total}
          progress={progress}
        />

        <FranchiseAccordion
          franchiseName="Transformers Franchise"
          content={transformersData}
          contentId="transformers"
          completedCount={watched}
          showHeader={false}
        />

      </div>
    </div>
  );
}

export default Transformers;