// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="bg-yellow-950 flex justify-between p-4 rounded-md
        items-center drop-shadow-[0_0_15px_#eceff1] backdrop-blur-lg">

            {/* div for our image and company name */}
            <div className="flex gap-4 items-center">
                <div>
                    <img src="/Logo.png" 
                    className="w-[30px] h-auto rounded-full"/>
                </div>
                <div>
                    <h1
                    className="text-stone-50">Canopy</h1>
                </div>

            </div>

            {/* div for navbar links */}
            <div>
                <a href="/" className="text-white px-4 py-2 hover:text-emerald-900
                cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out
                font-medium">
                Home
                </a>

                  <a href="/" className="text-white px-4 py-2 hover:text-emerald-900
                cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out
                font-medium">
                    About
                </a>

                  <a href="/" className="text-white px-4 py-2 hover:text-emerald-900
                cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out
                font-medium">
                Dashboard
                </a>

                  <a href="/" className="text-white px-4 py-2 hover:text-emerald-900
                cursor-pointer transform hover:scale-125 transition-all duration-300 ease-in-out
                font-medium">
                Report
                </a>
               

            </div>

        
        </div>
    )
}

export default NavBar