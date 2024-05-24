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
    const [selectedInsight, setSelectedInsight] = useState("")
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
                    <span className="mr-1">
                        {row.studentCount > 0 && (
                            <OverlayTrigger overlay={<Tooltip id="Student">Student</Tooltip>}>
                                <img src={student} />
                            </OverlayTrigger>
                        )}
                    </span>
                    <span className="mr-1">
                        {row.teacherCount > 0 && (
                            <OverlayTrigger overlay={<Tooltip id="Teacher">Teacher</Tooltip>}>
                                <img src={teacher} />
                            </OverlayTrigger>
                        )}
                    </span>
                    <span className="mr-1">
                        {row.sltCount > 0 && (
                            <OverlayTrigger overlay={<Tooltip id="Slt">Slt</Tooltip>}>
                                <img src={slt} />
                            </OverlayTrigger>
                        )}
                    </span>
                    <span className="mr-1">
                        {row.parentCount > 0 && (
                            <OverlayTrigger overlay={<Tooltip id="Parent">Parent</Tooltip>}>
                                <img src={parents} />
                            </OverlayTrigger>
                        )}
                    </span>
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

    const showPopUp = (row) => {
        setSelectedInsight(row.insights)
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
                        onRowClicked={(e) => showPopUp(e)}
                    />
                    <Modal show={show} onHide={() => setShow(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Insights</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                {selectedInsight}
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