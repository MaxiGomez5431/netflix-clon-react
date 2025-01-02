import useImages from "../../../hooks/useImages";
import HeroTitle from "./HeroTitle";
import { API_ENDPOINTS } from "../../../assets/apiConfig";
import useMobile from "../../../hooks/useMobile";

export default function Hero () {
  const randomNum = Math.floor(Math.random() * 20)
  const { movieData, imagesData} = useImages(API_ENDPOINTS.GET_POPULAR_MOVIES, randomNum)
  const {isMobile} = useMobile()

  return (
    <div className="h-auto max-h-[80%] relative overflow-hidden">

      {
        movieData && 

        !isMobile ?
        <img 
          src={`${API_ENDPOINTS.IMAGE_BACKDROP}${movieData.backdrop_path}`}
          className="h-full w-full min-h-[800px] object-cover object-center"
        />
        :
        <img 
          src={`${API_ENDPOINTS.IMAGE_BACKDROP}${imagesData?.posters[0]?.file_path}`}
          className="h-full w-full object-cover object-center"
        />
      }

      {
        !isMobile &&
        <HeroTitle movieData={movieData} imagesData={imagesData}/>
      }
      

    </div>
  )
}