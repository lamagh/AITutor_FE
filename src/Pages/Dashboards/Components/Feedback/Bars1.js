import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars1 = () => {
    const [recomendationNumbers, setRecomendationNumbers] =useState([])
    const series = [{
        name: '1',
        data: recomendationNumbers.recomendFriend
    }, {
        name: '2',
        data: recomendationNumbers.recomendStudents
    }, {
        name: '3',
        data: recomendationNumbers.imporoveGrades
    }, {
        name: '4',
        data: recomendationNumbers.enjoyable
    }, {
        name: '5',
        data: recomendationNumbers.exceed
    }];

    const getRecomendationNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetRecomendationNumbers",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setRecomendationNumbers(response.data);
            }
        });
    }

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
            categories: ['To a friend', 'Resource for Students', 'Improve grades', 'Enjoyable', 'Expectations Exceeded'],
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
        getRecomendationNumbers();
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

export default Bars1;