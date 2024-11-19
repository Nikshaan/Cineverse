
const MovieCard = ({poster, title, type, year}) => {
  return (
    <div className="flex flex-col flex-nowrap min-w-44 p-1 justify-start items-center bg-blue-400 text-red">
        <img src = {poster} className="w-full h-full"/>
        <p className="text-center text-xl">{title}</p>
        <p className="text-center">{type}</p>
        <p className="text-center">{year}</p>
    </div>
  )
}

export default MovieCard