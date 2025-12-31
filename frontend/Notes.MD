# Project Setup

## Charts
-Install using:
    '

    npm install chart.js
    //then
    npm i react-chartjs-2 chart.js

-Then import the individual charts in their components like so:
    '

    import { ChartName } from "react-chartjs-2";

## LineChart
1.Register the Chart.js components, in chartSetup.js
-The file should be inside the charts folder and is imported once in main.jsx.
    '

    import "./components/charts/chartSetup";


    '

    import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        BarElement,
        ArcElement,
        Title,
        Tooltip,
        Legend
    );


2.Create a Generic chart component:
    '

    import { Line, Pie, Bar } from "react-chartjs-2";
    import type { ChartData, ChartOptions } from "chart.js";

    type LineChartProps = {
    type: "line";
    data: ChartData<"line">;
    options?: ChartOptions<"line">;
    };

    type PieChartProps = {
    type: "pie";
    data: ChartData<"pie">;
    options?: ChartOptions<"pie">;
    };

    type BarChartProps = {
    type: "bar";
    data: ChartData<"bar">;
    options?: ChartOptions<"bar">;
    };

    type GenericChartProps =
    | LineChartProps
    | PieChartProps
    | BarChartProps;

    const GenericChart = (props: GenericChartProps) => {
    switch (props.type) {
        case "line":
        return <Line data={props.data} options={props.options} />;

        case "pie":
        return <Pie data={props.data} options={props.options} />;

        case "bar":
        return <Bar data={props.data} options={props.options} />;

        default:
        return null;
    }
};

export default GenericChart;




3.Define our charts.
-In the individual chart components, 
    '

    import GenericChart from "../../components/charts/GenericChart";

    const ChartName = () => {
        const data = {
        labels: [],
        //this is defines our x-axis
        datasets: [
            {
                label: "",
                //this gives a label to our line graph
                data: [],
                //data to be drawn on our graph
                borderColor: "",
                //assign our graph a color
                fill: false/true,
                //indicate whether to shade area under our graph
                tension: "", 0-1 where 0.4 gives really nice curves
                //define the curve smoothness for line charts
                borderWidth: 2, // line thickness
                pointRadius: 3, // data point size
                pointHoverRadius: 5, // hover effect
            }
        ]
        //multiple datasets can be added, multiple lines or bars
    }

    const options = {
        responsive: true,
        //makes our chart responsive
        plugins: {
            legend: { display: true, position: "top" },
            title: { display: true, text: chartTitle, font: { size: 18 }},
            tooltip: { enabled: true },
        },
        scales: {
            x: { title: { display: true, text: xAxisLabel } },
            y: { title: { display: true, text: yAxisLabel }, beginAtZero: true },
        },
    },
    }
    //for pie charts, scales can be omitted.

    return (
        <GenericChart type="line" data={data} options={options} />
    )

##  Setting the co-ordinates of the map.
    '

    center={[51.505, -0.09]}
-The above is an array rep [latitude, longitude]
-Set startup location to Karura forest, co-ordinates being [-1.247221, 36.81712]
