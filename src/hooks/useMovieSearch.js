import { useEffect, useState } from "react";
import { searchMovies } from "../utils/api";

export default function useMovieSearch(value, delay) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const [error, setError] = useState("");

  // onChange keystroke -> api call
  // delay, if no new onChange then will make api call
  // else reset the prev time and start count again

  useEffect(() => {
    const timmer = setTimeout(() => {
      setError("");
      if (value) {
        setDebouncedValue(value);
        setIsLoading(true);
        searchMovies(value)
          .then((resp) => {
            setIsLoading(false);
            setResults(resp.Search);
            // if (resp.Search instanceof Array && resp.Search.length > 0) {
            // } else {
            //   setError("No results found...");
            // }
          })
          .catch((e) => {
            console.log(e);
            setIsLoading(false);
            setResults([]);
            setError(e.message);
          });
      }
    }, delay);

    return () => clearTimeout(timmer);
  }, [value, delay]);

  return {
    debouncedValue,
    loading: isLoading,
    results,
    error,
  };
}
