import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { MdStarRate } from "react-icons/md";
import axios from "axios";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import student from "../../../images/visit/student.png";
import slt from "../../../images/visit/slt.png";
import teacher from "../../../images/visit/teacher.png";
import goldStar from "../../../images/visit/goldStar.png";
import greyStar from "../../../images/visit/greyStar.png";
import parents from "../../../images/visit/parent.png";
const VisitList = (props) => {
    const [visitList, setVisitList] = useState([])
    const [show, setShow] = useState(false)
    const getVisitList = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetVisitingData",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setVisitList(response.data);
                console.log(response.data)
            }
        });
    }
    const columns = [
        {
            name: "Date",
            selector: row => moment(row.date).format("DD-MM-yyyy")
        },
        {
            name: "Visit Type",
            selector: row => row.visitType
        },
        {
            name: "Trainer Name",
            selector: row => row.trainerName
        },
        {
            name: "Attendees",
            selector: row => row.attending
        },
        {
            name: "User Type",
            selector: row => (
                <>
                    {row.studentCount > 0 && (
                        <OverlayTrigger overlay={<Tooltip id="Student">Student</Tooltip>}>
                            <img src={student} />
                        </OverlayTrigger>
                    )}
                    {row.teacherCount > 0 && (
                        <OverlayTrigger overlay={<Tooltip id="Teacher">Teacher</Tooltip>}>
                            <img src={teacher} />
                        </OverlayTrigger>
                    )}
                    {row.sltCount > 0 && (
                        <OverlayTrigger overlay={<Tooltip id="Slt">Slt</Tooltip>}>
                            <img src={slt} />
                        </OverlayTrigger>
                    )}
                    {row.parentCount > 0 && (
                        <OverlayTrigger overlay={<Tooltip id="Parent">Parent</Tooltip>}>
                            <img src={parents} />
                        </OverlayTrigger>
                    )}
                </>
            )

        },
        {
            name: "Rate",
            selector: row =>
                row.rating == 1 ? (<>
                    <span className="active">
                        <img src={goldStar} />
                    </span>
                    <img src={greyStar} />
                    <img src={greyStar} />
                    <img src={greyStar} />
                    <img src={greyStar} />
                </>) :
                    row.rating == 2 ? (
                        <>
                            <span className="active">
                                <img src={goldStar} />
                                <img src={goldStar} />
                            </span>
                            <img src={greyStar} />
                            <img src={greyStar} />
                            <img src={greyStar} />
                        </>) :
                        row.rating == 3 ? (
                            <>
                                <span className="active">
                                    <img src={goldStar} />
                                    <img src={goldStar} />
                                    <img src={goldStar} />
                                </span>
                                <img src={greyStar} />
                                <img src={greyStar} />
                            </>) :
                            row.rating == 4 ? (
                                <>
                                    <span className="active">
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                    </span>
                                    <img src={greyStar} />
                                </>) : (<>
                                    <span className="active">
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                        <img src={goldStar} />
                                    </span></>)
        },
    ]

    const showPopUp = () => {
        setShow(true)
    }

    useEffect(() => (
        getVisitList()
    ), [])
    return (
        <>
            <div className="card visiting-list">
                <div className="card-header">
                    <h3 className="card-title">Visting List</h3>
                </div>
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={visitList}
                        pointerOnHover
                        onRowClicked={() => showPopUp()}
                         />
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Insights</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Trainer Insights</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h4 className="mt-10">Anecdotal Findings</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default VisitList;