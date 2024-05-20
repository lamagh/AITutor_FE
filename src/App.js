import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CountSessionByDate from "./Pages/Dashboards/Components/CountSessionByDate";
import MostTopicSearched from "./Pages/Dashboards/Components/MostTopicSearched";
import GradeActivityPercentage from "./Pages/Dashboards/Components/GradeActivityPercentage";
import Menu from "./Layout/Menu";

import totalStudentsImg from "./images/Counters/TotalStudents.png";
import ndaImg from "./images/Counters/nda.png";
import loginImg from "./images/Counters/login.png";
import activeImg from "./images/Counters/active.png";
import promptEntered from "./images/Counters/prompt-entered.png";
import promptFlagged from "./images/Counters/prompt-flagged.png";
import GradeActivityCount from "./Pages/Dashboards/Components/GradeActivityCount";
import notificationBell from "./images/TopBar/notification-bell.png";
import userIcon from "./images/TopBar/user-icon.png";
import arrowDown from "./images/TopBar/arrow-down.png";
import AITutorResponses from "./Pages/Dashboards/Components/AITutorResponses";
import StudentFeedback from "./Pages/Dashboards/Feedbacks/StudentFeedback/StudentFeedback";
import districts from "./images/Select/districts.png";
import school from "./images/Select/school.png";
import searchIcon from "./images/TopBar/search.png";
import dateFilterIcon from "./images/Select/calander.png";
import dateArrowDown from "./images/Select/arrowDown.png";
import moreFilter from "./images/Select/more.png";
import { useEffect, useState } from "react";
import axios from "axios";
import EducatorsFeedback from "./Pages/Dashboards/Feedbacks/EducatorsFeedback/EducatorsFeedback";
import TrainingFeedback from "./Pages/Dashboards/Feedbacks/TraningFeedback/TrainingFeedback";
function App() {
  const [tab, setTab] = useState(1);
  const [tabb, setTabb] = useState(1);
  const [schoolTypes, setSchoolTypes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [schools, setSchool] = useState([]);
  const [headerNumbers, setHeaderNumbers] = useState({
    students: 0,
    activeStudents: 0,
    isNDAStudents: 0,
    promptCount: 0,
    flaggedPromptCount: 0,
    distinctLoginCount: 0,
  });

  const [parameters, setParameter] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(0);
  const [selectedSchool, setSelectedSchool] = useState(0);
  const [selectedSchoolType, setSchoolType] = useState(0);
  const [selectedActiveFilter, setSelectedActiveFilter] = useState(3);
  const [showDateList, setShowDateList] = useState(false);

  const handleDateList = () => {
    if (showDateList == true) {
      setShowDateList(false);
    } else {
      setShowDateList(true);
    }
  };
  const [selectedDateTitle, setSelectedDateTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState([]);
  const handleSetDate = (date) => {
    switch (date) {
      case 1:
        setSelectedDateTitle("Today");
        setSelectedDate();
        break;
      case 7:
        setSelectedDateTitle("This Week");
        setSelectedDate();
        break;
      case 30:
        setSelectedDateTitle("This Month");
        setSelectedDate();
        break;
      case 365:
        setSelectedDateTitle("Past Year");
        setSelectedDate();
        break;
    }

    //handleDateList();
  };
  const applyFilter = () => {
    var param = "";
    if (selectedDistrict != 0) {
      if (param == "") {
        param = "?Emirates=" + selectedDistrict;
      } else {
        param = param + "&Emirates=" + selectedDistrict;
      }
    }
    if (selectedSchool != 0) {
      if (param == "") {
        param = "?SchoolId=" + selectedSchool;
      } else {
        param = param + "&SchoolId=" + selectedSchool;
      }
    }
    if (selectedSchoolType != 0) {
      if (param == "") {
        param = "?SchoolType=" + selectedSchoolType;
      } else {
        param = param + "&SchoolType=" + selectedSchoolType;
      }
    }

    setParameter(param);
  };

  const getHeaderNumbers = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetHeaderNumbers/" +
        parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setHeaderNumbers(response.data);
        console.log(response.data);
      }
    });
  };

  const getCountries = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetEmiratesStates/" +
        parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setCountries(response.data);
      }
    });
  };

  const getSchools = () => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_API_URL + "Dashboard/GetSchools/" + parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setSchool(response.data);
      }
    });
  };

  const getSchoolType = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetSchoolTypes/" +
        parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setSchoolTypes(response.data);
      }
    });
  };

  useEffect(() => {
    getCountries();
    getSchoolType();
    getSchools();
    getHeaderNumbers();
    handleSetDate(30);
  }, [parameters]);

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
            <div className="row align-items-center">
              <div className="col-md-8 search-bar">
                <img src={searchIcon} />
                <input
                  className="form-control form-control-sm"
                  placeholder="Search"
                />
              </div>
              <div className="col-md-1 text-center">
                <img src={notificationBell} />
              </div>
              <div className="col-md-3">
                <button className="user-profile">
                  <img src={userIcon} />
                  <span className="ml-1">Ahmad</span>
                  <img src={arrowDown} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row filter-section">
          <div className="filter-body">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2>Welcome to AITutor</h2>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-3 p-relative">
                    <img src={districts} className="filter-image-select" />
                    <select
                      className="filter-select"
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                      <option value={0}>All Emirates</option>
                      {countries.map((o) => (
                        <option value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4 p-relative">
                    <img src={school} className="filter-image-select" />
                    <select
                      className="filter-select"
                      onChange={(e) => setSelectedSchool(e.target.value)}
                    >
                      <option value={0}>All Schools</option>
                      {schools.map((o) => (
                        <option value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3 p-relative">
                    <img src={school} className="filter-image-select" />
                    <select
                      className="filter-select"
                      onChange={(e) => setSchoolType(e.target.value)}
                    >
                      <option value={0}>All School Types</option>
                      {schoolTypes.map((o) => (
                        <option value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn-filter"
                      onClick={() => applyFilter()}
                    >
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-right p-relative">
                <button
                  className="date-filter"
                  onClick={() => handleDateList()}
                >
                  <img src={dateFilterIcon} />
                  <span>{selectedDateTitle}</span>
                  <img src={dateArrowDown} />
                </button>
                <button className="more-filter">
                  <img src={moreFilter} />
                </button>
                {showDateList && (
                  <ul className="date-list">
                    <li>
                      <button className="" onClick={() => handleSetDate(1)}>
                        Today
                      </button>
                    </li>
                    <li className="odd">
                      <button className="" onClick={() => handleSetDate(7)}>
                        Weekly
                      </button>
                    </li>
                    <li>
                      <button className="" onClick={() => handleSetDate(30)}>
                        Monthly
                      </button>
                    </li>
                    <li className="odd">
                      <button className="" onClick={() => handleSetDate(365)}>
                        Yearly
                      </button>
                    </li>
                    <li>
                      <button className="">Custom</button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row cards">
          <div className="col-md-6 mb-5">
            <div className="row counter-box">
              <div className="col-md-4 lg">
                <div className="d-flex align-items-center">
                  <div className="counter-icon greenBG">
                    <img src={totalStudentsImg} />
                  </div>
                  <div className="counter-info">
                    <h5>Potential Students</h5>
                    <p>{headerNumbers.students}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 m">
                    <div className="d-flex align-items-center">
                      <div className="counter-icon blueBG">
                        <img src={ndaImg} />
                      </div>
                      <div className="counter-info">
                        <h5>Signed NDA</h5>
                        <p>{headerNumbers.isNDAStudents}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m">
                    <div className="d-flex align-items-center">
                      <div className="counter-icon blueBG">
                        <img src={loginImg} />
                      </div>
                      <div className="counter-info">
                        <h5>Logged In</h5>
                        <p>{headerNumbers.distinctLoginCount}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m">
                    <div className="d-flex align-items-center">
                      <div className="counter-icon blueBG">
                        <img src={activeImg} />
                      </div>
                      <div className="counter-info p-relative">
                        <h5>Active</h5>
                        <p>
                          {selectedActiveFilter == 1 && headerNumbers.last7Days}
                          {selectedActiveFilter == 2 &&
                            headerNumbers.last24Hours}
                          {selectedActiveFilter == 3 &&
                            headerNumbers.last30Days}
                        </p>
                        <ul className="active-students-filter">
                          <li
                            className={
                              selectedActiveFilter == 1 ? "active" : ""
                            }
                            onClick={() => setSelectedActiveFilter(1)}
                          >
                            24h
                          </li>
                          <li
                            className={
                              selectedActiveFilter == 2 ? "active" : ""
                            }
                            onClick={() => setSelectedActiveFilter(2)}
                          >
                            7d
                          </li>
                          <li
                            className={
                              selectedActiveFilter == 3 ? "active" : ""
                            }
                            onClick={() => setSelectedActiveFilter(3)}
                          >
                            30d
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="counter-box-sm">
              <div className="lg ml-1">
                <div className="d-flex">
                  <div className="counter-icon greenBG">
                    <img src={promptEntered} />
                  </div>
                  <div className="counter-info">
                    <h5>Total Prompts Entered</h5>
                    <p>{headerNumbers.promptCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3 p-0">
            <div className="counter-box-sm">
              <div className="lg ml-1">
                <div className="d-flex">
                  <div className="counter-icon greenBG">
                    <img src={promptFlagged} />
                  </div>
                  <div className="counter-info">
                    <h5>Total Flagged Prompts</h5>
                    <p>{headerNumbers.flaggedPromptCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3 ">
            <div className="graph-box">
              <CountSessionByDate parameters={parameters} />
            </div>
          </div>
          <div className="col-md-6 mb-3 p-relative">
            <div className="graph-box-tabs">
              <div className="row m-0">
                <div
                  className={tab == 1 ? "col-md-6 tab active" : "col-md-6 tab"}
                  onClick={() => setTab(1)}
                >
                  Active Students
                </div>
                {/* <div className='col-md-2'></div> */}
                <div
                  className={tab == 2 ? "col-md-6 tab active" : "col-md-6 tab"}
                  onClick={() => setTab(2)}
                >
                  Active Students Count
                </div>
              </div>
            </div>
            <div className="graph-box mt-4">
              {tab == 1 ? (
                <GradeActivityPercentage parameters={parameters} />
              ) : (
                <GradeActivityCount parameters={parameters} />
              )}
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="graph-box mb-3">
              <MostTopicSearched parameters={parameters} />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="graph-box">
              <AITutorResponses parameters={parameters} />
            </div>
          </div>
          <div className="col-md-12 mb-3 p-relative">
            <div class="graph-box-tabs">
              <div class="row m-0">
                <div
                  className={tabb == 1 ? "col-md-2 tab active" : "col-md-2 tab"}
                  onClick={() => setTabb(1)}
                >
                  Student Feedback
                </div>
                <div
                  className={tabb == 2 ? "col-md-2 tab active" : "col-md-2 tab"}
                  onClick={() => setTabb(2)}
                >
                  Educators Feedback
                </div>
                <div
                  className={tabb == 3 ? "col-md-2 tab active" : "col-md-2 tab"}
                  onClick={() => setTabb(3)}
                >
                  Training Feedback
                </div>
              </div>
            </div>
            <div className="graph-box mt-35">
              {tabb == 1 && <StudentFeedback parameters={parameters} />}
              {tabb == 2 && <EducatorsFeedback parameters={parameters} />}
              {tabb == 3 && <TrainingFeedback parameters={parameters} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
