import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-yellow-950 flex justify-between p-4 rounded-md items-center drop-shadow-[0_0_15px_#eceff1] backdrop-blur-lg">

      {/* Logo + Company Name */}
      <div className="flex gap-4 items-center">
        <div>
          <img src="/Logo.png" className="w-[30px] h-auto rounded-full" />
        </div>
        <div>
          <h1 className="text-stone-50">Canopy</h1>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="flex gap-4">
        <Link to="/" className="text-white px-4 py-2 hover:text-emerald-900 cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out font-medium">
          HomePage
        </Link>
        <Link to="/about" className="text-white px-4 py-2 hover:text-emerald-900 cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out font-medium">
          About
        </Link>
        <Link to="/dashboard" className="text-white px-4 py-2 hover:text-emerald-900 cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out font-medium">
          Dashboard
        </Link>
        <Link to="/report" className="text-white px-4 py-2 hover:text-emerald-900 cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out font-medium">
          Report
        </Link>
      </div>

    </div>
  );
};

export default NavBar;
