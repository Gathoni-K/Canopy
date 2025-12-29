import GenericChart from "../charts/GenericChart";

const LineGraph = () => {
    const data = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
        {
            label: "Afforestation Trend",
            data: [500, 520, 540, 560, 590, 620],
            borderColor: "green",
            backgroundColor: "lightgreen",
            fill: false,
            tension: 0.3,
        },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
        legend: { display: true, position: "top" },
        title: { display: true, text: "Afforestation Trends Over The Years", font: { size: 18 } },
        },
        scales: {
        x: { title: { display: true, text: "Year" } },
        y: { title: { display: true, text: "Forest Cover (ha)" }, beginAtZero: true },
        },
    };

    return (
        <div className="bg-stone-50 container mx-auto w-[90%] rounded-lg">
        <GenericChart type="line" data={data} options={options} />
        </div>
    )
}

export default LineGraph;