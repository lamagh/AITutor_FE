import ReactApexChart from "react-apexcharts";
import subjectIcon from "../../../images/Select/subject.png"
import axios from "axios";
import { useEffect, useState } from "react";
const MostTopicSearched = () => {

    const [promptCategories, setPromptCategories] = useState([])
    const [promptCategoriesLabel, setPromptCategoriesLabel] = useState([])
    const [promptCategoriesValue, setPromptCategoriesValue] = useState([])
    const getPromptCategories = () => {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_URL + "Dashboard/GetPromptCategories",
            headers: {
                "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
            },
        };
        axios(config).then(function (response) {
            if (response.status == 200) {
                setPromptCategories(response.data);

                var label = [];
                var value = [];
                response.data.forEach(element => {
                    label.push(element.label)
                    value.push(element.value)
                });

                setPromptCategoriesLabel(label)
                setPromptCategoriesValue(value)
            }
        });
    }
    const series = [
        {
            name: "",
            data: promptCategoriesValue,
        },
    ]

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: true,
                distributed: true,
                barHeight: '80%',
                isFunnel: true,
            },
        },
        colors: [
            '#1BD59E',
            '#47AFF8',
            '#05BC86',
            '#0078E6',
        ],
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex]
            },
            dropShadow: {
                enabled: true,
            },
        },
        title: {
            text: '',
        },
        xaxis: {
            categories: promptCategoriesLabel,
        },
        legend: {
            show: false,
        },
    }

    useEffect(() => {
        getPromptCategories()
    },[])

    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <h3>Most Popular Topic Searched</h3>
                </div>
                <div className="col-md-4 text-right">
                    <button className="btn-select">
                        <img src={subjectIcon}/>
                        <span>Subject</span>
                    </button>
                </div>
            </div>

            <ReactApexChart
                type="bar"
                options={options}
                series={series}
                height={350}
            />
        </>

    );
}

export default MostTopicSearched;