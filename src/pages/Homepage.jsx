import WimpyKid from "../Categories/WimpyKid";
import Batman from "../Categories/Batman";
import Chucky from "../Categories/Chucky";
import HarryPotter from "../Categories/HarryPotter";
import Navbar from "../components/Navbar";
import StarWars from "../Categories/StarWars";
import MyList from "../Categories/MyList";


const Homepage = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-black pb-10">
        <Navbar/>
        <div className="flex w-full h-full justify-center items-center">
          <iframe width="100%" className="h-64 sm:h-[42svh] lg:h-[70svh]" src="https://www.youtube.com/embed/cSp1dM2Vj48?si=icf8u-tE-3zF-Kp7&autoplay=1&mute=1&loop=1&playlist=cSp1dM2Vj48"
           title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="p-1 text-black dark:text-white -mt-1 lg:mt-2 mb-4 w-full font-raleway z-10 flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready Player One</p>
          <p className="text-xl sm:text-2xl lg:text-3xl mt-1 font-semibold">2018</p>
          <button className="my-1 text-white dark:text-black text-sm sm:my-2 lg:text-xl bg-black dark:bg-white hover:bg-white dark:hover:text-white hover:text-black border-black dark:border-white dark:hover:bg-black duration-300 border-2 p-1 px-3 rounded-2xl">Learn more</button>
        </div>
        <p className="text-black dark:text-white text-3xl 2xl:text-5xl pl-2 font-raleway -mb-3">Suggested Movies</p>
        <Batman/>
        <HarryPotter/>
        <StarWars/>
        <WimpyKid/>
        <Chucky/>
        <MyList />
    </div>
  )
}

export default Homepage