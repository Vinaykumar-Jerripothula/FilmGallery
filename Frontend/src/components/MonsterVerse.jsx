import FranchiseAccordion from "./FranchiseAccordion";
import { monsterVerseData } from "../data/monsterVerseData";

function MonsterVerse() {
  return (
    <FranchiseAccordion
      franchiseName="Monster Verse Universe"
      content={monsterVerseData}
    />
  );
}

export default MonsterVerse;