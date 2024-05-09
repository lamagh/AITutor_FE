import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CountSessionByDate from './Pages/Dashboards/Components/CountSessionByDate';
import MostTopicSearched from './Pages/Dashboards/Components/MostTopicSearched';
import GradeActivityPercentage from './Pages/Dashboards/Components/GradeActivityPercentage';
import Menu from './Layout/Menu';

import totalStudentsImg from "./images/Counters/TotalStudents.png"
import ndaImg from "./images/Counters/nda.png"
import loginImg from "./images/Counters/login.png"
import activeImg from "./images/Counters/active.png"
import promptEntered from "./images/Counters/prompt-entered.png"
import promptFlagged from "./images/Counters/prompt-flagged.png"
import GradeActivityCount from './Pages/Dashboards/Components/GradeActivityCount';
import notificationBell from "./images/TopBar/notification-bell.png"
import userIcon from "./images/TopBar/user-icon.png" 
import arrowDown from "./images/TopBar/arrow-down.png"
import AITutorResponses from './Pages/Dashboards/Components/AITutorResponses';
import StudentFeedback from './Pages/Dashboards/Components/StudentFeedback';
function App() {
  return (
    <div className="App">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="content dashboard container-fluid">
        <div className="row title-section">
          <div className="col-md-7">
            <h1>Dashboard</h1>
          </div>
          <div className="col-md-5 text-right">
              <div className='row align-items-center'>
                <div className='col-md-8'>
                  <input className='form-control form-control-sm' placeholder='Search'/>
                </div>
                <div className='col-md-1 text-center'>
                  <img src={notificationBell}/>
                </div>
                <div className='col-md-3'>
                  <button className='user-profile'>
                  <img src={userIcon} />
                  <span className='ml-1'>Ahmad</span>
                  <img src={arrowDown} className='ml-1'/>
                </button>
                </div>
              </div>
          </div>
        </div>
        <div className="row filter-section">
          <div className='filter-body'>
            <div className='row align-items-center'>
              <div className='col-md-3'>
                <h2>Welcome to AITutor</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row cards">
          <div className='col-md-6 mb-5'>
            <div className='row counter-box'>
              <div className='col-md-4 lg'>
                <div className='d-flex align-items-center'>
                  <div className='counter-icon greenBG'>
                    <img src={totalStudentsImg} />
                  </div>
                  <div className='counter-info'>
                    <h5>Total Students</h5>
                    <p>300,000</p>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-4 m'>
                    <div className='d-flex align-items-center'>
                      <div className='counter-icon blueBG'>
                        <img src={ndaImg} />
                      </div>
                      <div className='counter-info'>
                        <h5>Signed NDA</h5>
                        <p>100,000</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 m'>
                    <div className='d-flex align-items-center'>
                      <div className='counter-icon blueBG'>
                        <img src={loginImg} />
                      </div>
                      <div className='counter-info'>
                        <h5>Logged In</h5>
                        <p>100,000</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 m'>
                    <div className='d-flex align-items-center'>
                      <div className='counter-icon blueBG'>
                        <img src={activeImg} />
                      </div>
                      <div className='counter-info'>
                        <h5>Active</h5>
                        <p>50,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-5'>
            <div className='counter-box-sm'>
              <div className='lg ml-1'>
                <div className='d-flex'>
                  <div className='counter-icon greenBG'>
                    <img src={promptEntered} />
                  </div>
                  <div className='counter-info'>
                    <h5>Total Prompt Entered</h5>
                    <p>300,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-3 p-0'>
            <div className='counter-box-sm'>
              <div className='lg ml-1'>
                <div className='d-flex'>
                  <div className='counter-icon greenBG'>
                    <img src={promptFlagged} />
                  </div>
                  <div className='counter-info'>
                    <h5>Total Flagged Prompts</h5>
                    <p>9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 ">
            <div className='graph-box'>
              <CountSessionByDate />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='graph-box'>
              <GradeActivityPercentage />
              {/* <GradeActivityCount /> */}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='graph-box'>
              <MostTopicSearched />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='graph-box'>
              <StudentFeedback />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='graph-box'>
              <AITutorResponses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
