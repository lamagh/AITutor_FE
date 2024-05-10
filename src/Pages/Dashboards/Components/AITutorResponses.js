import ReactApexChart from "react-apexcharts";

const AITutorResponses = () => {

    const series = [44, 55];

    var options = {
        chart:{
            parentHeightOffset: 0,
        },
        legend: {
            show: true,
            position: "bottom",
            offsetY: -140,
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
        },
        labels: ['Effectiveness', 'Accuracy']
    }
    return (

        <>
            <h3>Effectiveness & Accuracy of AI Tutor Responses </h3>
            <ReactApexChart
                type="donut"
                options={options}
                series={series}
                height={480}
            />
        </>
    );
}

export default AITutorResponses;