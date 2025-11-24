import Layout from "../components/layout/Layout";
import { useState } from "react";

const About = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact submitted:", contactData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setContactData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 px-6 bg-[#FAFAF5] min-h-screen">
        <h1 className="text-4xl font-bold text-[[#004F3B] mb-6 text-center">
          About Canopy
        </h1>

        {/* Mission & Slogan */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-[#64A698] rounded-lg p-8 text-white shadow-md">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              Canopy empowers communities and rangers to protect forests through interactive mapping, data collection, and predictive analytics.
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center border border-[#E0E0E0]">
            <h3 className="font-bold text-[[#004F3B]] mb-2">Email</h3>
            <p className="text-[#333333]">support@canopy.org</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border border-[#E0E0E0]">
            <h3 className="font-bold text-[[#004F3B]] mb-2">Phone</h3>
            <p className="text-[#333333]">+254 700 123 456</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border border-[#E0E0E0]">
            <h3 className="font-bold text-[[#004F3B]] mb-2">Address</h3>
            <p className="text-[#333333]">Nairobi, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[[#004F3B] mb-6 text-center">
            Get in Touch
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactData.name}
              onChange={handleChange}
              required
              className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactData.email}
              onChange={handleChange}
              required
              className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactData.message}
              onChange={handleChange}
              required
              className="border border-[#E0E0E0] rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#004F3B] hover:bg-[#64A698] text-white font-bold py-3 px-6 rounded transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default About;
