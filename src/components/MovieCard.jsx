
const MovieCard = ({poster, title, year}) => {
  return (
    <div className="flex flex-col flex-nowrap text-black min-w-44 p-1 justify-start items-center bg-blue-400 text-red cursor-pointer">
        <img src = {poster} className="w-full h-full mb-2"/>
        <p className="text-center font-raleway font-bold">{title}</p>
        <p className="text-center font-raleway mb-2">{year}</p>
    </div>
  )
}

export default MovieCard