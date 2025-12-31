import { useState } from "react";
import Layout from "../components/layout/Layout";
import Location from "../components/ui/Location";
import Map from "../components/sections/Map";
import LineGraph from "../components/sections/LineGraph";
import PieChart from "../components/sections/PieChart";

type ForestStats = {
    deforestation: number;
    wildfires: number;
    afforestation: number;
    trend: number[];
    };


const KARURA_CENTER: [number, number] = [-1.247221, 36.81712];

const Dashboard = () => {
    const [center, setCenter] = useState<[number, number]>(KARURA_CENTER);

    const [forestStats, setForestStats] = useState<ForestStats>({
    deforestation: 250,
    wildfires: 50,
    afforestation: 300,
    trend: [500, 520, 540, 560, 590, 620],
});


    const handleSearch = async (city: string) => {
        try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
        );
        const data = await res.json();

        if (!data.length) {
            alert("City not found");
            return;
        }

        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        setCenter([lat, lon]);
        } catch (error) {
        console.error("Geocoding error:", error);
        }
    };

    return (
        <Layout>
        {/* input field */}
        <div className="flex justify-end mt-4 md:mt-6">
            <Location onSearch={handleSearch} />
        </div>

        {/* map */}
        <div className="mt-4 md:mt-6">
            <Map center={center} />
        </div>

        {/* charts */}
        <div className="mt-4 grid md:grid-cols-2">
            <LineGraph trend={forestStats.trend} />

            <PieChart
            deforestation={forestStats.deforestation}
            wildfires={forestStats.wildfires}
            afforestation={forestStats.afforestation}
            />

        </div>
        </Layout>
    );
};

export default Dashboard;
