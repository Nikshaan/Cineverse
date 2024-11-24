import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import loader from "../assets/loading.gif";
import defaultMovie from "../assets/default.jpg";
import cancel from "../assets/cancel.png";


const Modal = ({closeModal, MovieId}) => {
    const [movie, setMovie] = useState({Title: "none"});
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        (async() => {
            const url = `https://www.omdbapi.com/?apikey=ea6fcc05&i=${MovieId}`;
            let res = await fetch(url);
            let data = await res.json();
            setMovie(data);
            setImgSrc(data.Poster);})();
        }, []);

    return (
        <div className="w-screen h-screen bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <div className="w-[90%] h-[90%] relative rounded-xl text-white dark:text-black dark:bg-blue-400 bg-blue-800 overflow-auto bg-opacity-100 flex flex-col items-center justify-center">
            <div className="absolute top-2 left-2 text-2xl lg:text-4xl">
                <img src={cancel} alt="cancel" className="w-8 lg:w-10 2xl:w-12 cursor-pointer bg-white rounded-full dark:bg-transparent" onClick={() => closeModal(false)} />
            </div>
            {
            movie.Title == "none" 
            ? <div className="flex justify-center items-center text-3xl lg:text-4xl font-raleway">
                <p>Loading</p>
                <img alt="loader" src={loader} className="w-16 lg:w-20"/>
              </div>
            : <div className="flex flex-col mt-8 2xl:mt-10 p-2 justify-start h-full items-center">
                <div className="w-full flex flex-col gap-4 lg:gap-10 text-center p-2 items-center justify-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-raleway font-semibold underline underline-offset-4">{movie.Title} &nbsp;({movie.Year})</h1>
                    <img alt="poster" src={imgSrc} onError = {() => setImgSrc(defaultMovie)} className="w-40 md:w-48 lg:w-56 2xl:w-72 border-2 border-white dark:border-black"/>
                    <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-raleway">{movie.Plot}</p>
                </div>
                {
                  movie.imdbRating != "N/A" 
                  ?<StarRatings 
                    rating={parseFloat(movie.imdbRating)}
                    starRatedColor="yellow"
                    numberOfStars={10}
                    name='rating'
                    starDimension="25px"
                    starSpacing="1px" 
                    />
                    :null
                }
                <div className="flex w-full flex-col mt-2 p-2 pb-10 pl-4 lg:pl-6 gap-1 font-raleway md:text-lg lg:text-xl 2xl:text-2xl">
                    <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
                    <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
                    <p><span className="font-semibold">Language:</span> {movie.Language}</p>
                    <p><span className="font-semibold">Rated:</span> {movie.Rated}</p>
                    <p><span className="font-semibold">Type:</span> {movie.Type}</p>
                    <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
                    <p><span className="font-semibold">Director:</span> {movie.Director}</p>
                    <p><span className="font-semibold">Writers:</span> {movie.Writer}</p>
                </div>
            </div>
        }
            </div>
        </div>
    )
}

export default Modal