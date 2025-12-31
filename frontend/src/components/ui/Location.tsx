import { useState } from "react";

type LocationProps = {
    onSearch: (city: string) => void;
};

const Location = ({ onSearch }: LocationProps) => {
    const [city, setCity] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && city.trim()) {
        onSearch(city.trim());
        }
    };

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <input
            type="text"
            placeholder="Input City here"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
            border-2 border-emerald-900 rounded-md
            px-4 py-2 placeholder:text-stone-400 placeholder:italic
            bg-white shadow-sm
            focus:outline-none focus:ring-2 focus:border-emerald-900
            transition-all duration-200
            "
        />
        </div>
    );
};

export default Location;
