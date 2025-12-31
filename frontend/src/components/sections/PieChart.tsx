import GenericChart from "../charts/GenericChart";
import type { ChartData, ChartOptions } from "chart.js";

type PieChartProps = {
    deforestation: number;
    wildfires: number;
    afforestation: number;
};

const PieChart = ({
    deforestation,
    wildfires,
    afforestation,
    }: PieChartProps) => {
const data: ChartData<"pie"> = {
        labels: ["Deforestation", "Wild fires", "Afforestation"],
        datasets: [
        {
            data: [deforestation, wildfires, afforestation],
            backgroundColor: [
            "rgb(240, 12, 35)",
            "rgb(255, 241, 66)",
            "rgb(21, 158, 43)",
            ],
        },
        ],
    };

    const options: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
        title: { display: true, text: "Forest Distribution" },
        },
    };

    return (
        <div className="bg-stone-50 rounded-lg w-[400px] mx-auto">
        <GenericChart type="pie" data={data} options={options} />
        </div>
    );
};

export default PieChart;
