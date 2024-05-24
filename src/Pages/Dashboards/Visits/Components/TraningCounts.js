import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const TraningCounts = (props) => {
    const [gradeNumbers, setGradeNumbers] = useState([])
    const [gradeNumbersLabels, setGradeNumbersLabels] = useState([])
    const [gradeNumbersValues, setGradeNumbersValues] = useState([])
    const [gradeNumbersValuesNon, setGradeNumbersValuesNon] = useState([])
    const getGradeNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetVisitingCount/" + 1,
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
        name: 'Active',
        data: gradeNumbersValues
    },];

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
                endingShape: 'rounded',
                borderRadius: 10,
                borderRadiusApplication: "end",
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
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
            colors: ["#0005E6"]
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
    }, [props.parameters])

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
 
export default TraningCounts;