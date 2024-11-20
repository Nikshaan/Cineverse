import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"

const MyList = () => {
  const list = useSelector(state => state.list)

  return (
    <div className="p-2">
        <h1 className="text-2xl 2xl:text-4xl text-white font-raleway">My List</h1>
        <div className="bg-black flex flex-col overflow-auto">
        <div className="text-white flex w-full bg-black flex-nowrap gap-2">
            {
                list.map((movie) => (
                    <MovieCard key = {movie.id} id = {movie.id} poster = {movie.poster} title={movie.title} year = {movie.year} />
                ))
            }

        </div>
        </div>
    </div>
  )
}

export default MyList