import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { API_OPTIONS, API_ENDPOINTS } from "../assets/apiConfig";

function useImages(url, randomNum) {
  const { data, loading: fetchLoading } = useFetch(url); //Data of the 20 array most popular movies
  const [movieData, setMovieData] = useState() //Data of the most popular movie
  const [imagesData, setImagesData] = useState(null); //Data of the images of the most popular movie

  const fetchImages = async (movieData) => {
    console.log("en useImages, fetch images: ", movieData)

    if (movieData) {

      try {
        const response = await fetch(API_ENDPOINTS.GET_MOVIE_IMAGES(movieData), API_OPTIONS);
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