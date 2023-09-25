import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Game {            //interface for the game object provided by the api documention
    id: number,
    name: string,
}

interface FetchGamesResponse {      //interface for the response based on the api documentation
    count: number,
    results: Game[],
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]) //A list of game objects
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient.get<FetchGamesResponse>('/games')  //sends request to base url + /games and requires object form FetchGamesResponse
        .then(result => setGames(result.data.results))
        .catch(error => setError(error.message)) //if error, set error to error message
  })
    return (
        <>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
  )
}

export default GameGrid