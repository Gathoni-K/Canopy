import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

const impactStats = [
  { label: "Forests Mapped", value: 1250 },
  { label: "Reports Submitted", value: 342 },
  { label: "Predictions Made", value: 87 },
];

const features = [
  {
    title: "Forest Mapping Dashboard",
    description: "Visualize forest coverage across regions with interactive maps.",
    icon: "🌲",
    link: "/Dashboard",
  },
  {
    title: "Data Submission Form",
    description: "Contribute forest data easily and help protect ecosystems.",
    icon: "📝",
    link: "/Dashboard", 
  },
  {
    title: "illegal Logging Reports",
    description: "Report illegal logging and help authorities take action.",
    icon: "⚠️",
    link: "/Report",
  },
  {
    title: "Forest Coverage Predictor",
    description: "Predict future forest coverage for any area over time.",
    icon: "📊",
    link: "/Dashboard", // or another page if predictor is separate
  },
];

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#64A698] text-white py-20 px-6 text-center rounded-b-lg shadow-md">
        <h1 className="text-5xl font-bold mb-4">
          Protecting forests. Empowering rangers. Preserving ecosystems.
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Canopy is your go-to web app for interactive forest mapping, predictive analytics, and community-driven conservation.
        </p>
        <Link to="/about">
          <button className="bg-[#64A698] hover:bg-[#FAFAF5] hover:text-[#2E7D32] text-white font-bold py-3 px-6 rounded transition-colors duration-300">
            Learn More
          </button>
        </Link>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6 bg-[#FAFAF5] text-[#333333]">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#004F3B] hover:bg-[#64A698] text-white rounded-lg p-6 text-center transition-colors duration-300 shadow-md"
            >
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#FAFAF5]">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#333333]">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto auto-rows-fr">
  {features.map((feature, idx) => (
    <Link key={idx} to={feature.link}>
      <div className="bg-[#FAFAF5] border border-[#E0E0E0] rounded-lg shadow hover:shadow-lg p-6 text-center transition-all duration-300 cursor-pointer hover:scale-105 h-full flex flex-col justify-between">
        <div>
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2 text-[#2E7D32]">{feature.title}</h3>
          <p className="text-[#333333]">{feature.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>

      </section>
    </Layout>
  );
};

export default HomePage;
