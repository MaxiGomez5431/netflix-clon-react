import { useEffect, useState } from "react";
import useFetch from "./useFetch";

//`https://api.themoviedb.org/3/movie/${}/images`

function useImages (url) {
  const { data, loading} = useFetch(url);
  const [imagesData, setImagesData] = useState()

  const fetchImages = async () => {
    try {
      fetch(`https://api.themoviedb.org/3/movie/${data[0].id}/images`)
        .then(res => res.json())
        .then(data => setImagesData(data))
    
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if(!loading){
      fetchImages()
    }
  }, [loading])

  return {imagesData, loading}
}

export default useImages;