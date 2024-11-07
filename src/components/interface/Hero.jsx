import useImages from "../../hooks/useImages";

const backdrop = "https://image.tmdb.org/t/p/original/"
const buttonStyle = "w-1/2 h-10 m-1 text-xl md:text-2xl flex items-center rounded justify-center duration-200 hover:opacity-70"

//hay algunas veces que el logo del no se pude acceder, poner un salvaguarda para cuando no haya imagenes

export default function Hero () {
  const randomNum = Math.floor(Math.random() * 20)
  const { movieData, imagesData} = useImages("https://api.themoviedb.org/3/movie/popular", randomNum)

  return (
    <div className="h-[80%] relative overflow-hidden">

      {
        movieData &&
        <img 
          src={`${backdrop}${movieData.backdrop_path}`}
          className="h-full w-full object-cover object-center "
        />
      }
      
      <div 
        className="
          absolute 
          bottom-16 lg:bottom-1/3
          w-72 lg:w-96 left-1/2 -translate-x-1/2 lg:left-1/4
          flex flex-col "
      >

        {
          imagesData && movieData && 
          imagesData.logos.length <= 0 ? 
            <h1 className="text-5xl m-1 text-white font-bold text-shadow-xl ">
              {movieData.title}
            </h1>
            : 
            <img 
              src={`${backdrop}${imagesData?.logos[0]?.file_path}`}
              className="h-full w-full object-cover object-center "
            />
        }

        <div className="flex mt-3">
          <button className={`${buttonStyle} bg-white`} onClick={() => {console.log(imagesData)}}>
            <i className="fa-solid fa-play m-2"></i>
            Reproducir
          </button>

          <button className={`${buttonStyle} text-white bg-zinc-700`}>
            <i className="fa-solid fa-circle-info m-2"></i>
            Mi lista
          </button>
          
        </div>
      </div>
    </div>
  )
}