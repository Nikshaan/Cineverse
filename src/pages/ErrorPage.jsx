import { Link } from "react-router-dom";
import gif from "../assets/error.gif";

const ErrorPage = () => {
  return (
    <div className="w-full h-[100svh] bg-[#292929] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
            <img alt="loaderGif" src={gif} className="w-2/3 -mt-28 lg:w-5/6"/> 
        </div>
        <div className="flex font-raleway text-white flex-col justify-center items-center gap-2">
            <h1 className="text-2xl lg:text-5xl">404: page does not exist</h1>
            <Link to={"/"}>
                <button className="bg-black text-lg lg:text-4xl lg:mt-3 cursor-pointer font-semibold px-2 2xl:px-3 py-0.5 rounded-2xl">Go to HomePage</button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage