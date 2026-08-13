import FranchiseAccordion from "../template/FranchiseAccordion";
import { jackReacherData } from "../../data/duology/jackReacherData";

function JackReacher({ progressMap }) {
  return (
    <FranchiseAccordion
      franchiseName="Jack Reacher"
      content={jackReacherData}
      contentId={"jackreacher"}
      completedCount={progressMap.jackreacher || 0}
    />
  );
}

export default JackReacher;