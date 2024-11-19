import WimpyKid from "../Categories/WimpyKid";
import Batman from "../Categories/Batman";
import Chucky from "../Categories/Chucky";
import HarryPotter from "../Categories/HarryPotter";
import Navbar from "../components/Navbar";
import StarWars from "../Categories/StarWars";


const Homepage = () => {
  return (
    <div className="h-full w-full bg-black">
        <Navbar/>
        <Batman/>
        <HarryPotter/>
        <StarWars/>
        <WimpyKid/>
        <Chucky/>
    </div>
  )
}

export default Homepage