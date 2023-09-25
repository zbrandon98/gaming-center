import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGeneresResponse {
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]) //A list of game objects
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<FetchGeneresResponse>('/genres', {signal: controller.signal})  //sends request to base url + /games and requires object form FetchGamesResponse
          .then((result) => {
            setGenres(result.data.results);
            setIsLoading(false);
            })
          .catch((error) => {
            if (error instanceof CanceledError) return; 
            setError(error.message);
            setIsLoading(false)}); //if error, set error to error message

          return () => controller.abort(); //abort the fetch request if the component is unmounted
    }, [])

    return {genres, error, isLoading};
};
export default useGenres;