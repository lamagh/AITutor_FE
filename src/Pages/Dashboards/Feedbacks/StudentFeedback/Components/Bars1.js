import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars1 = (props) => {
    const [recomendationNumbers, setRecomendationNumbers] = useState({
        recomendFriend: [0, 0, 0, 0, 0],
        recomendStudents: [0, 0, 0, 0, 0],
        imporoveGrades: [0, 0, 0, 0, 0],
        enjoyable: [0, 0, 0, 0, 0],
        exceed: [0, 0, 0, 0, 0],
    })
    const series = [{
        name: '1',
        data: [recomendationNumbers.recomendFriend != null && recomendationNumbers.recomendFriend[0], recomendationNumbers.recomendStudents != null && recomendationNumbers.recomendStudents[0], recomendationNumbers.imporoveGrades != null && recomendationNumbers.imporoveGrades[0], recomendationNumbers.enjoyable != null && recomendationNumbers.enjoyable[0], recomendationNumbers.exceed != null && recomendationNumbers.exceed[0]]
    }, {
        name: '2',
        data: [recomendationNumbers.recomendFriend != null && recomendationNumbers.recomendFriend[1], recomendationNumbers.recomendStudents != null && recomendationNumbers.recomendStudents[1], recomendationNumbers.imporoveGrades != null && recomendationNumbers.imporoveGrades[1], recomendationNumbers.enjoyable != null && recomendationNumbers.enjoyable[1], recomendationNumbers.exceed != null && recomendationNumbers.exceed[1]]
    }, {
        name: '3',
        data: [recomendationNumbers.recomendFriend != null && recomendationNumbers.recomendFriend[2], recomendationNumbers.recomendStudents != null && recomendationNumbers.recomendStudents[2], recomendationNumbers.imporoveGrades != null && recomendationNumbers.imporoveGrades[2], recomendationNumbers.enjoyable != null && recomendationNumbers.enjoyable[2], recomendationNumbers.exceed != null && recomendationNumbers.exceed[2]]
    }, {
        name: '4',
        data: [recomendationNumbers.recomendFriend != null && recomendationNumbers.recomendFriend[3], recomendationNumbers.recomendStudents != null && recomendationNumbers.recomendStudents[3], recomendationNumbers.imporoveGrades != null && recomendationNumbers.imporoveGrades[3], recomendationNumbers.enjoyable != null && recomendationNumbers.enjoyable[3], recomendationNumbers.exceed != null && recomendationNumbers.exceed[3]]
    }, {
        name: '5',
        data: [recomendationNumbers.recomendFriend != null && recomendationNumbers.recomendFriend[4], recomendationNumbers.recomendStudents != null && recomendationNumbers.recomendStudents[4], recomendationNumbers.imporoveGrades != null && recomendationNumbers.imporoveGrades[4], recomendationNumbers.enjoyable != null && recomendationNumbers.enjoyable[4], recomendationNumbers.exceed != null && recomendationNumbers.exceed[4]]
    }];

    const getRecomendationNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetRecomendationNumbers/" + props.parameters,
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

export default Bars1;