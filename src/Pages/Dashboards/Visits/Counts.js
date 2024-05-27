import visits from "../../../images/VisitCounter/visits.png"
import rate from "../../../images/VisitCounter/rate.png"
import attend from "../../../images/VisitCounter/attend.png"
import { useEffect, useState } from "react"
import axios from "axios"

const VisitCounters = () => {
    const [visitCounts, setVisitCounts] = useState({})
    const getVisitCounts = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetVisitingHeader",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setVisitCounts(response.data);
                console.log(response.data)
            }
        });
    }

    useEffect(() => {
        getVisitCounts()
    },[])
    return (
        <>
            <div className="visit-counter counter-box">
                <div className="row w-100">
                    <div className="col-md-4 m">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon blueBG">
                                <img src={visits} />
                            </div>
                            <div className="counter-info">
                                <h5>Total Vists</h5>
                                <p>{visitCounts.totalVisits}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 m ">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon blueBG">
                                <img src={attend} />
                            </div>
                            <div className="counter-info">
                                <h5>Total Attendees</h5>
                                <p>{visitCounts.totalAttendes}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 m">
                        <div className="d-flex align-items-center">
                            <div className="counter-icon blueBG">
                                <img src={rate} />
                            </div>
                            <div className="counter-info">
                                <h5>Avg Rating</h5>
                                <p>{visitCounts.averageRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VisitCounters;