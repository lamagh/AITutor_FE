import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const HomeworkSubmission = (props) => {
  const [stars, setStars] = useState([]);

  const getStars = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetEducatorStarRating/" +
        props.parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
        // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setStars(response.data.homeworkSumbisison);
      }
    });
  };

  const series = [
    {
      name: "Rating",
      data: stars,
    },
  ];

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
        barHeight: "80%",
        // isFunnel: true,
      },
    },
    colors: ["#FFBC58"],
    dataLabels: {
      enabled: false,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: "",
    },
    xaxis: {
      categories: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
    },
    legend: {
      show: false,
    },
  };

  useEffect(() => {
    getStars();
  }, [props.parameters]);
  return (
    <>
      <ReactApexChart
        type="bar"
        options={options}
        series={series}
        height={280}
        width={480}
      />
    </>
  );
};

export default HomeworkSubmission;
