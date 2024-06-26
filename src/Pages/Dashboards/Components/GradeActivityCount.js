import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const GradeActivityCount = (props) => {
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
          nonValues.push(element.studentCount - element.studentPrompt);
          values.push(element.studentPrompt);
        });
        setGradeNumbersLabels(labels);
        setGradeNumbersValues(values);
        setGradeNumbersValuesNon(nonValues);
      }
    });
  };

  const series = [
    {
      name: "Active",
      data: gradeNumbersValues,
    },
    {
      name: "In Active",
      data: gradeNumbersValuesNon,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
        borderRadius: 10,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "center", // top, center, bottom
        },
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
      labels: {
        style: {
          cssClass: "axisText",
        },
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: ["#05BC86", "#84D4BD"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    legend: {
      show: false,
      fontSize: "14px",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 700,
      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
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

export default GradeActivityCount;
