**Project Setup**

# Charts
-Install using:
    '

    npm install chart.js
    //then
    npm i react-chartjs-2 chart.js

-Then import the individual charts in their components like so:
    '

    import { ChartName } from "react-chartjs-2";

# LineChart
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

    import { Line, Bar, Pie } from "react-chartjs-2";
    import type { ChartOptions, ChartData } from "chart.js";

    type ChartType = "line" | "bar" | "pie";

    type GenericChartProps<T extends ChartType> = {
        type: T;
        data: ChartData<T>;
        options?: ChartOptions<T>;
    } & React.ComponentProps<typeof Line | typeof Bar | typeof Pie>;

    const GenericChart = <T extends ChartType>({ 
        type, 
        data, 
        options,
        ...props 
    }: GenericChartProps<T>) => {
        const chartTypes = {
            line: Line,
            bar: Bar,
            pie: Pie
        } as const;
        
        const ChartComponent = chartTypes[type];
        
        return <ChartComponent data={data as any} options={options as any} {...props} />;
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
