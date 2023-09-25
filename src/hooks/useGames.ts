import useData from "./useData";

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
    metacritic: number,
}


const useGames = () => useData<Game>('/games');

export default useGames;