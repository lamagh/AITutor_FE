import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars = () => {
    const [evaluationsNumbers, setEvaluationsNumbers] = useState([])
    const getEvaluationsNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetEvaluationsNumbers",
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
        data: evaluationsNumbers.easyToUse
    }, {
        name: '2',
        data: evaluationsNumbers.clear1
    }, {
        name: '3',
        data: evaluationsNumbers.visually
    }, {
        name: '4',
        data: evaluationsNumbers.responsive
    }, {
        name: '5',
        data: evaluationsNumbers.reliable
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
    },[])
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