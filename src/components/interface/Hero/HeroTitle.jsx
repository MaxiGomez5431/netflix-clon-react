import HeroBtns from "./HeroBtns";
import { API_ENDPOINTS } from "../../../assets/apiConfig";

export default function HeroTitle({movieData, imagesData}) {
  const existALogo = imagesData && movieData && imagesData.logos.length <= 0

  return (
    <div 
      className="
        absolute 
        bottom-16 lg:bottom-1/3
        w-72 lg:w-96 left-1/2 -translate-x-1/2 lg:left-1/4
        flex flex-col "
    >

      {

        existALogo ? 
        <h1 className="text-5xl m-1 text-white font-bold text-shadow-xl ">
          {movieData.title}
        </h1>
        : 
        <img
          src={`${API_ENDPOINTS.IMAGE_BACKDROP}${imagesData?.logos[0]?.file_path}`}
          className="h-full w-full object-cover object-center "
        />
      }

      <HeroBtns/>
      
    </div>
  )
}