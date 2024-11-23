import { useEffect, useState } from "react";
import defaultMovie from "../assets/default.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../Redux/listSlice";
import Modal from "./Modal";

const MovieCard = ({id, poster, title, year}) => {
  const [imgSrc, setImgSrc] = useState(poster);
  const [listed, setListed] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  const checkButton = () => {
    list.map((movie) => {
      if(id === movie.id){
        setListed(true);
      }})
  };

  useEffect(() => checkButton(), []);

  const addToList = () => {
    dispatch(addMovie({id, poster, title, year}));
  }

  const removeFromList = () => {
    dispatch(removeMovie(id));
  }

  return (
    <div className="flex flex-col flex-nowrap text-white min-w-44 max-w-48 lg:min-w-56 2xl:min-w-72 p-1 justify-start items-center dark:text-black dark:bg-blue-400 bg-blue-800">
        <img onClick={() => setOpenModal(true)} alt="moviePoster" src={imgSrc} onError = {() => setImgSrc(defaultMovie)} className="w-full h-full mb-2 cursor-pointer"/>
        <p onClick={() => setOpenModal(true)} className="text-center font-raleway font-bold lg:text-xl cursor-pointer">{title}</p>
        <p onClick={() => setOpenModal(true)} className="text-center font-raleway mb-2 lg:text-xl cursor-pointer">{year}</p>      
      {
        openModal && <Modal closeModal={setOpenModal} MovieId = {id}/>
      }
      {
        !listed
        ? <button id={id} className="bg-white text-black text-sm lg:text-base text-center font-raleway border-2 border-black rounded-xl px-2 py-1 mb-2 cursor-pointer" onClick={() => {addToList(), setListed(true)}}>Add to List</button>
        : <button id={id} className="bg-white text-black text-sm lg:text-base text-center font-raleway border-2 border-black rounded-xl px-2 py-1 mb-2 cursor-pointer" onClick={() => {removeFromList(), setListed(false)}}>Remove from List</button>
      }
    </div>
  )
}

export default MovieCard