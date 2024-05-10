import gradeIcon from '../../../images/Select/grades.png' 
import Bars from './Feedback/Bars';
import Bars1 from './Feedback/Bars1';
import Pie from './Feedback/Pie';
const StudentFeedback = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <h3>Student Feedback</h3>
                </div>
                <div className="col-md-4 text-right">
                    <button className="btn-select">
                        <img src={gradeIcon} />
                        <span>All Grade</span>
                    </button>
                </div>
            </div>
            <div className='row feedback'>
                <div className='col-md-12 mb-5'>
                    <h5>How user-friendly is the AI Tutor platform?</h5>
                    <p>(1 being not user-friendly at all and 5 being extremely user-friendly)</p>
                    <Bars parameters={props.parameters}/>
                </div>
                <div className='col-md-12 mb-5'>
                    <h5>Has AI Tutor helped students improve their grades</h5>
                    <Pie parameters={props.parameters}  />
                </div>
                <div className='col-md-12'>
                    <h5>How likely are you to recommend AI Tutor to a friend?</h5>
                    <p>(1 being not user-friendly at all and 5 being extremely user-friendly)</p>
                    <Bars1 parameters={props.parameters} />
                </div>
            </div>
        </>
    );
}

export default StudentFeedback;