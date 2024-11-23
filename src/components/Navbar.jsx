import watchList from "../assets/clipboard.png";
import search from "../assets/search.png";
import switch1 from "../assets/switch1.png";
import switch2 from "../assets/switch2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
let mode = true;

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(mode);

    const darkModeSwitch = () => {
        var file = document.getElementById("main");
        if(darkMode){
            file.classList.add("dark");
        }else{
            file.classList.remove("dark");
        }
        mode = darkMode;
    }

    useEffect(() => darkModeSwitch(), [darkMode])

  return (
    <div className="w-full bg-white dark:bg-black h-16 lg:h-24 2xl:h-32 2xl:px-3 flex justify-between items-center p-2">
        <div className="text-7xl lg:text-8xl 2xl:text-9xl flex justify-center items-center">
            <Link to = "/Cineverse/">
                <h1 className="text-blue-800 mt-3 dark:text-blue-400 cursor-pointer font-corinthia">Cine<span className="text-blue-500 dark:text-blue-200">verse</span>.</h1>
            </Link>
        </div>
        <div className="flex justify-center items-center gap-2 lg:gap-4">
            <Link to = "/Cineverse/watchList">
                <img src = {watchList} alt="watchList" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer"/>
            </Link>

            <Link to = "/Cineverse/search">
                <img src = {search} alt="search" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer"/>
            </Link>
            <img src = {darkMode ? switch1 : switch2} onClick={() => setDarkMode(!darkMode)}
             alt="switch" className="w-9 h-9 lg:w-12 lg:h-12 cursor-pointer border-2 border-blue-400 rounded-full bg-white"/>
        </div>
    </div>
  )
}

export default Navbar