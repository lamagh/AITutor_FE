import ReactApexChart from "react-apexcharts";

const GradeActivityPercentage = () => {
    const series = [{
        name: '',
        data: [44, 55, 57, 56, 61, 58]
    }];

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Garde 12', 'Garde 10', 'Garde 9', 'Garde 8', 'Garde 5', 'Garde 6'],
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        },
    };

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
}

export default GradeActivityPercentage;