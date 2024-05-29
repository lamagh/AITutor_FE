import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Bars1 = (props) => {
    const [loading, setLoading] = useState(true)
    const [evaluationsNumbers, setEvaluationsNumbers] = useState({
        excited: [0, 0, 0, 0, 0],
        confident: [0, 0, 0, 0, 0]
    })
    const getEvaluationsNumbers = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetExcitedTraining/" + props.parameters,
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                console.log(response.data)
                setEvaluationsNumbers(response.data);
                setLoading(false)
            }
        });
    }
    var series = [{
        name: "Not at all",
        data: [evaluationsNumbers.excited != null && evaluationsNumbers.excited[0], evaluationsNumbers.confident != null && evaluationsNumbers.confident[0]]
    }, {
        name: "Slightly",
        data: [evaluationsNumbers.excited != null && evaluationsNumbers.excited[1], evaluationsNumbers.confident != null && evaluationsNumbers.confident[1]]
    },
    {
        name: "Somewhat",
        data: [evaluationsNumbers.excited != null && evaluationsNumbers.excited[2], evaluationsNumbers.confident != null && evaluationsNumbers.confident[2]]
    },
    {
        name: "Very",
        data: [evaluationsNumbers.excited != null && evaluationsNumbers.excited[3], evaluationsNumbers.confident != null && evaluationsNumbers.confident[3]]
    },
    {
        name: "Extremely",
        data: [evaluationsNumbers.excited != null && evaluationsNumbers.excited[4], evaluationsNumbers.confident != null && evaluationsNumbers.confident[4]]
    }]
    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        colors: ["#BBE6FF", "#7DC1FF", "#0005E6", "#0078E6", "#05BC86"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Excited', 'Confident'],
        },
        yaxis: {
            title: {
                text: ''
            }
        },
        fill: {
            opacity: 1
        },
    }

    useEffect(() => {
        getEvaluationsNumbers()
    }, [props.parameters])
    return (
        <>
            {loading == false && (
                <ReactApexChart
                    type="bar"
                    options={options}
                    series={series}
                    height={380}
                />
            )}
            
        </>
    );
}

export default Bars1;