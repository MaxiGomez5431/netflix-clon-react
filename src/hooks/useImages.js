import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import options from "../assets/options.json"

function useImages(url, randomNum) {
  const { data, loading: fetchLoading } = useFetch(url); //Data of the 20 array most popular movies
  const [movieData, setMovieData] = useState() //Data of the most popular movie
  const [imagesData, setImagesData] = useState(null); //Data of the images of the most popular movie

  const fetchImages = async (movieData) => {
    console.log("fetch images: ", movieData)
    console.log("fetchLoading: ", fetchLoading)

    if (movieData) {

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieData.id}/images?language=en`, options);
        const images = await response.json();
        setImagesData(images);
      } catch (err) {
        console.error("Error fetching images:", err);
      }

    } else {
      console.warn("La data no tiene el formato esperado o no está disponible");
    }
  };

  useEffect(() => {
    if (!fetchLoading) {
      setMovieData(data[randomNum])
    }
  }, [fetchLoading]);

  useEffect(() => {
    if (movieData) {
      fetchImages(movieData)
    }
  }, [movieData])

  return { movieData, imagesData };
}

export default useImages;