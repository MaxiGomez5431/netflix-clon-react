import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import useImages from "../../hooks/useImages";



export default function Hero () {
  const { data, loading } = useFetch("https://api.themoviedb.org/3/movie/popular");

  
  const [bannerImage, setBannerImage] = useState()
  const backdrop = "https://image.tmdb.org/t/p/original/"
  const buttonStyle = "w-1/2 h-10 m-1 text-xl md:text-2xl flex items-center rounded justify-center duration-200 hover:opacity-70"

  useEffect(() => {
    if (!loading) {
      setBannerImage(data)
    }  

  },[loading])

  return (
    <div className="h-3/4 relative">

      <img 
        src={`${backdrop}${bannerImage && bannerImage[0].backdrop_path}`}
        className="h-full w-full object-cover object-top "
      />
      
      <div 
        className="
          absolute 
          bottom-1/3
          w-96 left-1/2 -translate-x-1/2 lg:left-1/4
          flex flex-col "
      >
      
        <h1 className="text-5xl text-white font-bold ">
          {bannerImage && bannerImage[0].original_title}
        </h1>

        <div className="flex mt-5">
          <button className={`${buttonStyle} bg-white`}>
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