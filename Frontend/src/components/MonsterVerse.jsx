import FranchiseAccordion from "./FranchiseAccordion";
import { monsterVerseData } from "../data/monsterVerseData";

function MonsterVerse({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Monster Verse Universe"
      content={monsterVerseData}
      contentId={"monsterverse"}
      completedCount={progressMap.monsterverse || 0}
    />
  );
}

export default MonsterVerse;