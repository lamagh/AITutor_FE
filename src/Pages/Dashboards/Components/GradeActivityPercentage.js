import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const GradeActivityPercentage = (props) => {
  const [gradeNumbers, setGradeNumbers] = useState([]);
  const [gradeNumbersLabels, setGradeNumbersLabels] = useState([]);
  const [gradeNumbersValues, setGradeNumbersValues] = useState([]);
  const [gradeNumbersValuesNon, setGradeNumbersValuesNon] = useState([]);
  const getGradeNumbers = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetGradeNumbers" +
        props.parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setGradeNumbers(response.data);
        console.log(response.data);

        var labels = [];
        var values = [];
        var nonValues = [];
        response.data.forEach((element) => {
          labels.push(element.gradeName);
          values.push(100 - element.percentage);
          nonValues.push(element.percentage);
        });
        setGradeNumbersLabels(labels);
        setGradeNumbersValues(nonValues);
        setGradeNumbersValuesNon(values);
      }
    });
  };

  const series = [
    {
      name: "Active",
      data: gradeNumbersValues,
    },
    {
      name: "Inactive",
      data: gradeNumbersValuesNon,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: gradeNumbersLabels,
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: ["#0078E6", "#9FD5F3"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      show: false,
    },
  };

  useEffect(() => {
    getGradeNumbers();
  }, [props.parameters]);

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
};

export default GradeActivityPercentage;
