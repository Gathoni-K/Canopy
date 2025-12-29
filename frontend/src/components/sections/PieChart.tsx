import GenericChart from "../charts/GenericChart";
import type { ChartData, ChartOptions } from "chart.js";

const PieChart = () => {
    const data: ChartData<"pie"> = {
        labels: [
            "Red",
            "Yellow",
            "Green",
        ],
        datasets: [
            {
                label: "Forest Data over The Years",
                data: [250, 50, 300],
                backgroundColor: [
                    "rgb(240, 12, 35)",
                    "rgb(255, 241, 66)",
                    "rgb(21, 158, 43)",
                ],
                hoverOffset: 4,
            }
        ],
    };

    const options: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            title: {
                display: true,
                text: "Forest Distribution",
            },
        },
    };

    return (
        <div style={{ width: "400px", margin: "0 auto" }}
        className="bg-stone-50 rounded-lg">
            <GenericChart type="pie" data={data} options={options} />
        </div>
    );
};

export default PieChart;