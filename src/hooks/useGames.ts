
import useData from "./useData";

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
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


const useGames = () => useData<Game>('/games')



export default useGames