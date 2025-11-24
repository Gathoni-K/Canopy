const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-gray-200 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Canopy
          </h2>
          <p className="mt-3 text-sm text-gray-300">
            Protecting forests. Empowering rangers. Preserving ecosystems.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-emerald-300 transition">Home</a></li>
            <li><a href="/map" className="hover:text-emerald-300 transition">About</a></li>
            <li><a href="/analytics" className="hover:text-emerald-300 transition">Dashboard</a></li>
            <li><a href="/reports" className="hover:text-emerald-300 transition">Reports</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Email: <span className="font-medium text-emerald-300">support@canopy.org</span>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Phone: <span className="font-medium text-emerald-300">+254 700 123 456</span>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Address: Nairobi, Kenya
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Canopy — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
