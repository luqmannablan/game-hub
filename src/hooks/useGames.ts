
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
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
// open the data hook to make it flexible so we can add Genre parameter
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])



export default useGames