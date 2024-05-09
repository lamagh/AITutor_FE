import gradeIcon from '../../../images/Select/grades.png' 
const StudentFeedback = () => {
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
        </>
    );
}

export default StudentFeedback;