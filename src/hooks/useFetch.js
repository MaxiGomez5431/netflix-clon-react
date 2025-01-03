import { useState, useEffect } from "react";
import { API_OPTIONS } from "../assets/apiConfig";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Error en la respuesta");
        }
        let data = await response.json();
        data = await data.results
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;