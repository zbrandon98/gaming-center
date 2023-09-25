import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Platform {
    id: number,
    name: string,
    slug: string,
}
export interface Game {            //interface for the game object provided by the api documention
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
}

interface FetchGamesResponse {      //interface for the response based on the api documentation
    count: number,
    results: Game[],
}

const useGames = () => {
    
    const [games, setGames] = useState<Game[]>([]) //A list of game objects
    const [error, setError] = useState('')
    
    useEffect(() => {
        const controller = new AbortController();
        
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})  //sends request to base url + /games and requires object form FetchGamesResponse
          .then(result => setGames(result.data.results))
          .catch(error => {if (error instanceof CanceledError) return; setError(error.message)}) //if error, set error to error message

          return () => controller.abort(); //abort the fetch request if the component is unmounted
    }, [])

    return {games, error};
}

export default useGames;