import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Chucky = () => {

  const [movies, setMovies] = useState([]);
  const fetchData = async() => {
      const url = 'https://www.omdbapi.com/?apikey=ea6fcc05&s=chucky&type=movie';
      let res = await fetch(url);
      let data = await res.json();
      setMovies(data.Search)
  }
  
  useEffect(() => {fetchData()}, []);

  return (
    <div className="p-2 flex flex-col gap-2">
    <p className="text-3xl text-white">Chucky Movies</p>
    <div id = "category" className="bg-black flex flex-col overflow-auto">
      <div className="text-white flex w-full bg-black flex-nowra2 gap-1">
        {
          movies.length!=10
          ? <p>Loading...</p>
          : movies.map((movie) => (
            <MovieCard key = {movie.imdbID} poster = {movie.Poster} title={movie.Title} type = {movie.Type} year = {movie.Year} />
          )
          )
        }
    </div>
    </div>
    </div>
  )
}

export default Chucky