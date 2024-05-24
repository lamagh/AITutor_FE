import EducatorYesNo from "./Components/StudentsAsked";
import TrainingYesNo from "../TraningFeedback/Components/TrainingYesNo";
import gradeIcon from "../../../../images/Select/grades.png";
import StudentsAsked from "./Components/StudentsAsked";
import StudentsUsed from "./Components/StudentsUsed";

import Bars from "./Components/Bars";
import Bars1 from "./Components/Bars1";
import Bars2 from "./Components/Bars2";
import LikelyRecomend from "./Components/LikelyRecomend";
import HomeworkSubmission from "./Components/HomeworkSubmission";

const EducatorsFeedback = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <h3></h3>
        </div>
        <div className="col-md-4 text-right">
          <button className="btn-select">
            <img src={gradeIcon} />
            <span>All Grade</span>
          </button>
        </div>
      </div>
      <div className="row feedback">
        <div className="col-md-6 mb-5">
          <h5>
            Have your students asked any questions about the AI Tutor
            application?
          </h5>
          <StudentsAsked parameters={props.parameters} />
          <h5>
            Have your students used AI Tutor to help with their homework? Are
            you aware of that?
          </h5>
          <StudentsUsed parameters={props.parameters} />
          <h5>
            Rate the regularity of homework submissions since the introduction
            of AI Tutor?
          </h5>
          <HomeworkSubmission parameters={props.parameters} />
          <h5>How effective is AI Tutor in helping students learn?</h5>
          <Bars1 parameters={props.parameters} />
        </div>
        <div className="col-md-6">
          <h5>How user-friendly is AI Tutor?</h5>
          <Bars parameters={props.parameters} />
          <h5>How effective is AI Tutor in helping students learn?</h5>
          <Bars2 parameters={props.parameters} />
          <h5>How likely are you to recommend AI Tutor to other teachers?</h5>
          <LikelyRecomend parameters={props.parameters} />
        </div>
      </div>
    </>
  );
};

export default EducatorsFeedback;
