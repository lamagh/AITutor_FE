import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const TrainingYesNo = (props) => {
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
    var series= [{
        data: trainingNumbers.traningCover
    }];

    var options = {
       
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Yes', 'No'],
        }
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
                height={380}
            />
        </>
    );
}

export default TrainingYesNo;