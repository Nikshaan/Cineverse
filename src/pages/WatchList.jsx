import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const list = useSelector(state => state.list)
  console.log(list)
  return (
    <div className=" w-full pb-10">
      <Navbar/>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-white flex p-4 font-raleway md:-mr-10 text-2xl md:text-3xl lg:text-4xl mb-6 underline underline-offset-2">Username Watch List</h1>
      </div>
      <div className="text-white mt-2 h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 place-items-center w-full bg-black gap-1 gap-y-4 2xl:gap-y-8">
          {
             list.map((movie) => (
              <MovieCard key = {movie.id} id = {movie.id} poster = {movie.poster} title={movie.title} year = {movie.year} />
            ))
          }
        </div>
    </div>
  )
}

export default WatchList