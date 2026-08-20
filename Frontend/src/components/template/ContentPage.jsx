import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentHero from "./ContentHero";
import ContentAccordion from "./ContentAccordion";
import { contentRegistry } from "../../data/Collection/contentRegistry";
import { useTheme } from "../../context/ThemeContext";
import { colors } from "../../themes/colors";
import { useEffect } from "react";
import Navbar from "../layout/Navbar";

function FranchisePage() {
  const { slug } = useParams();
  const { theme } = useTheme();
  const currentTheme = colors[theme];
  useEffect(() => {
    console.log("CONTENT PAGE RERENDERED:", theme);
  }, [theme]);
  const franchise = contentRegistry[slug];

  const progressMap = useSelector((state) => state.progress.progressMap);

  if (!franchise) {
    return (
      <div className="min-h-screen bg-[#0B0F14] text-white flex items-center justify-center">
        Content not found
      </div>
    );
  }

  const watched = progressMap[franchise.contentId] || 0;

  const total = franchise.content.length || 0;

  const progress = total > 0 ? Math.round((watched / total) * 100) : 0;

  return (
    <div
      className={`
      min-h-screen
      ${currentTheme.page}
      ${currentTheme.text}
    `}
    >
      <Navbar enableSearch={false} />

      {" "}

    <div className="pt-4 sm:pt-5">
      <ContentHero
        title={franchise.title}
        subtitle={franchise.subtitle}
        image={franchise.image}
        watched={watched}
        total={total}
        progress={progress}
      />
      <ContentAccordion
        franchiseName={franchise.title}
        content={franchise.content}
        contentId={franchise.contentId}
        completedCount={watched}
        showHeader={false}
      />
    </div>
    </div>
  );
}

export default FranchisePage;
