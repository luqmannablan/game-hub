
import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

// this interface is what is needed when getting the platform of the game
export interface Platform {
    id: number;
    name: string;
    slug: string;
}


// this interface is the attributes of the game
export interface Game { // with this we can use this interface else where in our code
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}
// open the data hook to make it flexible so we can add Genre parameter
const useGames = (gameQuery: GameQuery) => (
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText

        }
    },
        [gameQuery]
    ))



export default useGames