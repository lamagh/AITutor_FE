import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Pie = () => {
    const [stars, setStars] = useState([])
    const series = [44, 55, 41, 17, 15];

    const options = {
        labels: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
        colors: ["#FFAD33", "#FFBC58", "#FFCA7C", "#FCD499", "#FFE4BD"],
    }

    const getStars = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetStarRating",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
                // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setStars(response.data);
            }
        });
    }

    useEffect(() => {
        getStars()
    }, [])
    return (<>
        <ReactApexChart
            type="donut"
            options={options}
            series={stars}
            height={280}
            width={480}
        />
    </>);
}

export default Pie;