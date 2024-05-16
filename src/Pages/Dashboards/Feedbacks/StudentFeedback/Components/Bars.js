import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars = (props) => {
    const [evaluationsNumbers, setEvaluationsNumbers] = useState({
        easyToUse: [0, 0, 0, 0, 0],
        clear1: [0, 0, 0, 0, 0],
        visually: [0, 0, 0, 0, 0],
        responsive: [0, 0, 0, 0, 0],
        reliable: [0, 0, 0, 0, 0],
        series:["",""]
    })
    const getEvaluationsNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetEvaluationsNumbers/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setEvaluationsNumbers(response.data);
            }
        });
    }

    const series = [{
        name: '1',
        data: [evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[0], evaluationsNumbers.clear1 != null && evaluationsNumbers.clear1[0], evaluationsNumbers.visually != null && evaluationsNumbers.visually[0], evaluationsNumbers.responsive != null && evaluationsNumbers.responsive[0], evaluationsNumbers.reliable != null && evaluationsNumbers.reliable[0]]
    }, {
        name: '2',
        data: [evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[1], evaluationsNumbers.clear1 != null && evaluationsNumbers.clear1[1], evaluationsNumbers.visually != null && evaluationsNumbers.visually[1], evaluationsNumbers.responsive != null && evaluationsNumbers.responsive[1], evaluationsNumbers.reliable != null && evaluationsNumbers.reliable[1]]
    }, {
        name: '3',
        data: [evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[2], evaluationsNumbers.clear1 != null && evaluationsNumbers.clear1[2], evaluationsNumbers.visually != null && evaluationsNumbers.visually[2], evaluationsNumbers.responsive != null && evaluationsNumbers.responsive[2], evaluationsNumbers.reliable != null && evaluationsNumbers.reliable[2]]
    }, {
        name: '4',
        data: [evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[3], evaluationsNumbers.clear1 != null && evaluationsNumbers.clear1[3], evaluationsNumbers.visually != null && evaluationsNumbers.visually[3], evaluationsNumbers.responsive != null && evaluationsNumbers.responsive[3], evaluationsNumbers.reliable != null && evaluationsNumbers.reliable[3]]
    }, {
        name: '5',
        data: [evaluationsNumbers.easyToUse != null && evaluationsNumbers.easyToUse[4], evaluationsNumbers.clear1 != null && evaluationsNumbers.clear1[4], evaluationsNumbers.visually != null && evaluationsNumbers.visually[4], evaluationsNumbers.responsive != null && evaluationsNumbers.responsive[4], evaluationsNumbers.reliable != null && evaluationsNumbers.reliable[4]]
    }];

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: evaluationsNumbers.series,
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        colors: ["#A31818", "#EE7272", "#616161", "#0078E6", "#05BC86"],
        legend: {
            show: true,
            position: "bottom",
            offsetY: 0,
        },
    }

    useEffect(() => {
        getEvaluationsNumbers()
    }, [props.parameters])
    return (
        <>
            <ReactApexChart
                type="bar"
                options={options}
                series={series}
                height={380}
            />
        </>
    );
}

export default Bars;