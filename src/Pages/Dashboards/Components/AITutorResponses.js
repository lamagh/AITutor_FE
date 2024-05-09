import ReactApexChart from "react-apexcharts";

const AITutorResponses = () => {

    const series = [44, 55];

    var options = {
        legend: {
            show: true,
            position:"bottom"
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 50
            }
        },
        grid: {
            show: false
        }
    }
    return (

        <>
            <h3>Effectiveness & Accuracy of AI Tutor Responses </h3>
            <ReactApexChart
                type="donut"
                options={options}
                series={series}
                height={250}
            />
        </>
    );
}

export default AITutorResponses;