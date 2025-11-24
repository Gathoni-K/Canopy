import Layout from "../components/layout/Layout";
import { useState } from "react";

const Report = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Report submitted:", formData);
    alert("Thank you! Your report has been submitted.");
    setFormData({ name: "", location: "", description: "", email: "" });
  };

  return (
    <Layout>
      <section className="py-16 px-6 bg-[#FAFAF5] min-h-screen">
        <h1 className="text-4xl font-bold text-[#2E7D32] mb-6 text-center">
          Report Illegal Logging
        </h1>
        <p className="text-center text-[#333333] mb-12">
          Help protect forests by reporting illegal logging activities in your area.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
            <input
              type="text"
              name="location"
              placeholder="Location of Incident"
              value={formData.location}
              onChange={handleChange}
              required
              className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
          </div>
          <textarea
            name="description"
            placeholder="Describe what you saw..."
            value={formData.description}
            onChange={handleChange}
            required
            className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
          ></textarea>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
          />
          <button
            type="submit"
            className="bg-[#2E7D32] hover:bg-[#81C784] text-white font-bold py-3 px-6 rounded transition-colors duration-300"
          >
            Submit Report
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Report;
