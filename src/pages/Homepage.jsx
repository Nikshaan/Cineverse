import WimpyKid from "../Categories/WimpyKid";
import Batman from "../Categories/Batman";
import Chucky from "../Categories/Chucky";
import HarryPotter from "../Categories/HarryPotter";
import Navbar from "../components/Navbar";
import StarWars from "../Categories/StarWars";


const Homepage = () => {
  return (
    <div className="h-full w-full bg-black pb-4">
        <Navbar/>
        <div className="flex w-full h-full justify-center items-center">
          <iframe width="100%" className="h-64" src="https://www.youtube.com/embed/cSp1dM2Vj48?si=icf8u-tE-3zF-Kp7&autoplay=1&mute=1&loop=1&playlist=cSp1dM2Vj48" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="p-1 text-white -mt-5 mb-4 w-full font-raleway z-10 flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">Ready Player One</p>
          <p className="text-xl font-semibold">2018</p>
          <button className="text-md my-1 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-black duration-300 border-2 p-1 px-3 rounded-2xl">Learn more</button>
        </div>
        <p className="text-white text-3xl pl-2 font-raleway -mb-1">Suggested Movies</p>
        <Batman/>
        <HarryPotter/>
        <StarWars/>
        <WimpyKid/>
        <Chucky/>
    </div>
  )
}

export default Homepage