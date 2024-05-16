import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const StudentsAsked = (props) => {
    const [askedNumbers, setAskedNumbers] = useState([])
    const getAskedNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetEducatorYesNo/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setAskedNumbers(response.data.studentsAsked);
            }
        });
    }
    var series = [{
        data: askedNumbers
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
        getAskedNumbers()
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

export default StudentsAsked;