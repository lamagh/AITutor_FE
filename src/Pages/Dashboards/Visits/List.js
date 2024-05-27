import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { MdStarRate } from "react-icons/md";
import axios from "axios";

const VisitList = (props) => {
    const [visitList, setVisitList] = useState([])

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
            name: "User Type"
        },
        {
            name: "Rate",
            selector: row =>
                row.rating == 1 ? (<>
                    <span className="active">
                        <MdStarRate />
                    </span>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                </>) :
                    row.rating == 2 ? (
                        <>
                            <span className="active">
                                <MdStarRate />
                                <MdStarRate />
                            </span>
                            <MdStarRate />
                            <MdStarRate />
                            <MdStarRate />
                        </>) :
                        row.rating == 3 ? (
                            <>
                                <span className="active">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                </span>
                                <MdStarRate />
                                <MdStarRate />
                            </>) :
                            row.rating == 4 ? (
                                <>
                                    <span className="active">
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                        <MdStarRate />
                                    </span>
                                    <MdStarRate />
                                </>) : (<><span className="active"><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></span></>)
        },
    ]

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
                        data={visitList} />
                </div>
            </div>
        </>
    );
}

export default VisitList;