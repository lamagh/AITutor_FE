import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const QueryCleared = (props) => {
    const [trainingNumbers, setTrainingNumbers] = useState([])
    const getTrainingNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetTrainingYesNo/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setTrainingNumbers(response.data);
                console.log(response.data)
            }
        });
    }
    var series = [{
        data: trainingNumbers.queryCleared
    }];

    var options = {
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
                distributed: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Yes', 'No'],
        },
        colors: ["#0078E6", "#05BC86"],
    };
    useEffect(() => {
        getTrainingNumbers()
    }, [])
    return (
        <>
            <ReactApexChart
                type="bar"
                options={options}
                series={series}
                height={280}
            />
        </>
    );
}

export default QueryCleared;