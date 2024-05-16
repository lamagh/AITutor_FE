import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const StudentsUsed = (props) => {
    const [usedNumbers, setUsedNumbers] = useState([])
    const getUsedNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetEducatorYesNo/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setUsedNumbers(response.data.studentsUsed);
            }
        });
    }
    var series = [{
        data: usedNumbers
    }];

    var options = {
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
            },
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
        getUsedNumbers()
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

export default StudentsUsed;