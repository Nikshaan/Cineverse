import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);

  const searchMovie = async(title) => {
      const url = `https://www.omdbapi.com/?apikey=ea6fcc05&s=${title}`;
      let res = await fetch(url);
      let data = await res.json();

      if(data.Response === "False"){
        setMovies([]);
      }else{
        setMovies(data.Search);
      };
  };

  return (
    <>
    <Navbar/>
    <div className="flex bg-white dark:bg-black flex-col justify-center items-center pb-10">
      <div className="flex flex-col w-full mt-4 gap-3 justify-center items-center font-raleway">
        <h1 className="text-black dark:text-white text-3xl">Search for a Movie</h1>
        <input onChange={(e) => searchMovie(e.target.value)} className="w-2/3 px-4 py-1.5 rounded-full border-none bg-black text-white dark:bg-white dark:text-black" type="text" placeholder="Enter Movie's title here" />
      </div>
      <div className="text-black dark:text-white mt-8 h-full p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 place-items-center w-full bg-white dark:bg-black gap-1 gap-y-4 2xl:gap-y-8">
        {
          movies.map((movie) => (
            <div key={movie.imdbID} className="min-w-44 max-w-48 lg:min-w-56 2xl:min-w-72 bg-blue-400 flex justify-center items-center">
              <MovieCard key = {movie.imdbID} id = {movie.imdbID} poster = {movie.Poster} title={movie.Title} year = {movie.Year} />
            </div>
        ))
        }
      </div>
    </div>
    </>
  )
}

export default SearchPage