import ReactApexChart from "react-apexcharts";
const CountSessionByDate = () => {

    const series = [{
        name: "STOCK ABC",
        data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.00],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.10],
            [1328742000000, 32.65]]
    }]

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
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: ""
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: false
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    return (
        <>
            <h3>Count of sessions by Date</h3>
            <ReactApexChart
                type="area"
                options={options}
                series={series}
                height={350}
            />
        </>
    );
}

export default CountSessionByDate;