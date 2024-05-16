import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars1 = (props) => {
    const [loading, setLoading] = useState(true)
    const [evaluationsNumbers, setEvaluationsNumbers] = useState({
        easyToNavigate: [0, 0, 0, 0, 0],
        evaluationsNumbers: [0, 0, 0, 0, 0]
    })
    const getEvaluationsNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetEducatorUserFriendly/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setEvaluationsNumbers(response.data);
                setLoading(false)
            }
        });
    }
    var series = [{
        name: "Not at all",
        data: [evaluationsNumbers.easyToNavigate != null && evaluationsNumbers.easyToNavigate[0], evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[0]]
    }, {
        name: "Slightly",
        data: [evaluationsNumbers.easyToNavigate != null && evaluationsNumbers.easyToNavigate[1], evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[1]]
    },
    {
        name: "Somewhat",
        data: [evaluationsNumbers.easyToNavigate != null && evaluationsNumbers.easyToNavigate[2], evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[2]]
    },
    {
        name: "Very",
        data: [evaluationsNumbers.easyToNavigate != null && evaluationsNumbers.easyToNavigate[3], evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[3]]
    },
    {
        name: "Extremely",
        data: [evaluationsNumbers.easyToNavigate != null && evaluationsNumbers.easyToNavigate[4], evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[4]]
    }]
    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        colors: ["#A31818", "#EE7272", "#616161", "#0078E6", "#05BC86"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Excited', 'Confident'],
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        fill: {
            opacity: 1
        },
    }

    useEffect(() => {
        getEvaluationsNumbers()
    }, [props.parameters])
    return (
        <>
            {loading == false && (
                <ReactApexChart
                    type="bar"
                    options={options}
                    series={series}
                    height={380}
                />
            )}
            
        </>
    );
}

export default Bars1;