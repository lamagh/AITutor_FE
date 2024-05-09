import ReactApexChart from "react-apexcharts";
import subjectIcon from "../../../images/Select/subject.png"
const MostTopicSearched = () => {
    const series = [
        {
            name: "",
            data: [880, 990, 1100, 1380],
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
            categories: ['Chemistry', 'Physics', 'English Language', 'Mathmatics'],
        },
        legend: {
            show: false,
        },
    }

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