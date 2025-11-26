import Layout from "../components/layout/Layout";
import Location from "../components/ui/Location";
import Map from "../components/sections/Map";
import LineGraph from "../components/sections/LineGraph";

const Dashboard = () => {
    return (
        <div>
            <Layout>
            
            {/* div for input field */}
            <div className="flex justify-end mt-4 md:mt-6">
                <Location />
            </div>

            {/* container for our map */}
            <div className="mt-4 md:mt-6">
                <Map />
            </div>

            {/* container for both charts */}
            <div className="mt-4 grid md:grid-cols-2">
                <LineGraph />

            </div>
            </Layout>
        </div>
    )
}

export default Dashboard