import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import pepe from "../assets/pepe.gif";

const WatchList = () => {
  const list = useSelector(state => state.list)
  
  return (
    <>
    <Navbar/>
    <div className="w-full bg-white text-black dark:bg-black dark:text-white pb-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-black dark:text-white flex p-4 font-raleway md:-mr-10 text-2xl md:text-3xl lg:text-4xl mb-6 underline underline-offset-2">Username Watch List</h1>
      </div>
          {
            list.length === 0
            ? <div className="flex w-full h-full justify-center items-center gap-1">
                <h1 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl font-raleway">Feels empty</h1>
                <img src={pepe} alt="pepeSad" className="w-10"/>
              </div>
            : <div className="text-black dark:text-white mt-2 h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 place-items-center w-full bg-white dark:bg-black gap-1 gap-y-4 2xl:gap-y-8">
              {
              list.map((movie) => (
              <div key={movie.imdbID} className="min-w-44 max-w-48 lg:min-w-56 2xl:min-w-72 bg-blue-400 flex justify-center items-center">
                <MovieCard key = {movie.id} id = {movie.id} poster = {movie.poster} title={movie.title} year = {movie.year} />
              </div>
                ))
              }
            </div>
          }
        </div>
        </>
  )
}

export default WatchList