import { useState } from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import { MdStarRate } from "react-icons/md";

const VisitList = (props) => {
    const [visitList, setVisitList] = useState([
        {
            date: "2024-05-05",
            visitType: "Physical",
            trainer: "Layal Al Abdallah",
            attendees: 100,
            userType: [
                {

                }
            ],
            rate: 1
        }
    ])
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
            selector: row => row.trainer
        },
        {
            name: "Attendees",
            selector: row => row.attendees
        },
        {
            name: "User Type"
        },
        {
            name: "Rate",
            selector: row => row.attendees == 1 ? (<>
                <span className="active"><MdStarRate /></span><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
            </>) : (row.attendees == 2 ? (
                <><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                    </>) : (<><span className="active"><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /></span></>))
        },
    ]
    return (
        <>
            <div className="card">
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