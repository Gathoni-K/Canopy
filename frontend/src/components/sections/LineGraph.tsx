import GenericChart from "../charts/GenericChart";

type LineGraphProps = {
    trend: number[];
};

const LineGraph = ({ trend }: LineGraphProps) => {
    const data = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [
        {
            label: "Afforestation Trend",
            data: trend,
            borderColor: "green",
            backgroundColor: "lightgreen",
            tension: 0.3,
        },
        ],
    };

    return (
        <div className="bg-stone-50 container mx-auto w-[90%] rounded-lg">
        <GenericChart type="line" data={data} />
        </div>
    );
};

export default LineGraph;
