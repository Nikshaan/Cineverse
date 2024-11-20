import profile from "../assets/user.png";
import search from "../assets/search.png";
import switch1 from "../assets/switch1.png";
import switch2 from "../assets/switch2.png";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import { useState } from "react";

const Navbar = () => {

    const [LightMode, setLightMode] = useState(false);

  return (
    <div className="w-full bg-black h-16 lg:h-20 flex justify-between items-center px-4 py-2">
        <div className="text-4xl lg:text-6xl flex justify-center items-center">
            <Link to = "/">
                <h1 className="text-blue-400 cursor-pointer font-lacquer">Cine<span className="text-blue-700">verse</span>.</h1>
            </Link>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
            <Tooltip id="my-tooltip" />
            
            <div className="group relative">
                <img src = {profile} alt="profile" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer border-2 border-blue-400 rounded-full"/>
                <div className="group-hover:block hidden absolute text-sm top-9 -right-10 pt-3 2xl:pt-4">
                    <div className= "flex flex-col font-raleway text-lg 2xl:text-xl items-center justify-start rounded-lg p-2 2xl:pb-4 gap-1 w-32 h-28 border-2 border-blue-400 bg-blue-200">
                        <p>Username</p>
                        <Link to = "/watchList">
                            <p className="text-center text-nowrap cursor-pointer hover:underline underline-offset-2">Watch List</p>
                        </Link>
                        <Link to = "/authorization">
                            <p className="cursor-pointer hover:underline underline-offset-2">Log Out</p>
                        </Link>
                    </div>
                </div>
            </div>

            <Link to = "/search">
                <img data-tooltip-id="my-tooltip" data-tooltip-content="Search" src = {search} alt="search" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer"/>
            </Link>

            <img src = {LightMode ? switch2 : switch1} onClick={() => setLightMode(!LightMode)}
             alt="switch" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer border-2 border-blue-400 rounded-full bg-white"/>
        </div>
    </div>
  )
}

export default Navbar