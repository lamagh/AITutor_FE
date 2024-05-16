import QueryCleared from "./Components/QueryCleared";
import TrainingClear from "./Components/TrainingClear";
import TrainingYesNo from "./Components/TrainingYesNo";
import gradeIcon from '../../../../images/Select/grades.png'
import Pie from "./Components/Pie";
import Bars1 from "./Components/Bars1";

const TrainingFeedback = (props) => {
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
            <div className='row feedback'>
                <div className='col-md-6 mb-5'>
                    <h5>Was the training clear and easy to understand?</h5>
                    <TrainingClear parameters={props.parameters} />
                </div>
                <div className='col-md-6'>
                    <h5>Did the training cover all the topics you were hoping to learn?</h5>
                    <QueryCleared parameters={props.parameters} />
                </div>
                <div className='col-md-6 mb-5'>
                    <h5>Were all your queries regarding AI Tutor cleared during the training?</h5>
                    <TrainingYesNo parameters={props.parameters} />
                    
                </div>
                <div className='col-md-6 mb-5'>
                    <h5>How excited are you to use AI Tutor after this training?</h5>
                    <Bars1 parameters={props.parameters} />
                </div>
            </div>
            
        </>
     );
}
 
export default TrainingFeedback;