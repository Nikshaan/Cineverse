import { useState } from "react";
import defaultMovie from "../assets/default.jpg";

const MovieCard = ({id, poster, title, year}) => {
  const [imgSrc, setImgSrc] = useState(poster);

  const watchList = (cardId) => {
    console.log(cardId)
    let button = document.getElementById(cardId);
    if(button.innerHTML === "Add to Watch List"){
      button.innerHTML = "Added";
    }else{
      button.innerHTML = "Add to Watch List";
    }
  }

  return (
    <div className="flex flex-col flex-nowrap text-black min-w-44 lg:min-w-56 2xl:min-w-72 p-1 justify-start items-center bg-blue-400 text-red">
        <img src = {imgSrc} onError = {() => setImgSrc(defaultMovie)} className="w-full h-full mb-2"/>
        <p className="text-center font-raleway font-bold lg:text-xl">{title}</p>
        <p className="text-center font-raleway mb-2 lg:text-xl">{year}</p>
        <button id={id} className="bg-white text-sm lg:text-base text-center font-raleway border-2 border-black rounded-xl px-2 py-1 mb-2 cursor-pointer" onClick={() => watchList(id)}>Add to Watch List</button>
    </div>
  )
}

export default MovieCard