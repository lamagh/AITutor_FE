import axios from "axios";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const CountSessionByDate = (props) => {
  const [loginCount, setLoginCount] = useState([]);
  const getLoginCount = () => {
    var config = {
      method: "get",
      url:
        process.env.REACT_APP_API_URL +
        "Dashboard/GetLoginCount/" +
        props.parameters,
      headers: {
        "Access-Control-Allow-Origin": process.env.REACT_APP_Host,
      },
    };
    axios(config).then(function (response) {
      if (response.status == 200) {
        setLoginCount(response.data);
      }
    });
  };

  const series = [
    {
      name: "",
      data: loginCount,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    toolbar: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "",
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          cssClass: "axisText",
        },
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        style: {
          cssClass: "axisText",
        },
      },
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  useEffect(() => {
    getLoginCount();
  }, [props.parameters]);
  return (
    <>
      <h3>Count of Conversations</h3>
      <ReactApexChart
        type="area"
        options={options}
        series={series}
        height={350}
      />
    </>
  );
};

export default CountSessionByDate;
