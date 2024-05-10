import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const GradeActivityCount = () => {

    const [gradeNumbers, setGradeNumbers] = useState([])
    const [gradeNumbersLabels, setGradeNumbersLabels] = useState([])
    const [gradeNumbersValues, setGradeNumbersValues] = useState([])
    const getGradeNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetGradeNumbers",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setGradeNumbers(response.data);
                
                var labels = []
                var values = []
                response.data.forEach(element => {
                    labels.push(element.label)
                    values.push(element.value)
                });
                setGradeNumbersLabels(labels)
                setGradeNumbersValues(values)
            }
        });
    }


    const series = [{
        name: '',
        data: gradeNumbersValues
    }];

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
        },
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
            categories: gradeNumbersLabels,
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1,
            colors: ["#616161"]
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
    };

    useEffect(() => {
        getGradeNumbers()
    },[])

    return (
        <>
            <ReactApexChart
                type="bar"
                options={options}
                series={series}
                height={350}
            />
        </>
    );
}

export default GradeActivityCount;