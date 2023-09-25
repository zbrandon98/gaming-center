import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string) => {
    

    const [data, setData] = useState<T[]>([]); //A list of game objects
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})  //sends request to base url + /games and requires object form FetchGamesResponse
          .then((result) => {
            setData(result.data.results);
            setIsLoading(false);
            })
          .catch((error) => {
            if (error instanceof CanceledError) return; 
            setError(error.message);
            setIsLoading(false)}); //if error, set error to error message

          return () => controller.abort(); //abort the fetch request if the component is unmounted
    }, [])

    return {data, error, isLoading};
};
export default useData;