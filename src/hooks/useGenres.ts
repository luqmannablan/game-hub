
import useData from "./useData";

export interface Genre {
    id: number
    name: string
    image_background: string

}

// hiding certain details like '/genres' here 
const useGenres = () => useData<Genre>('/genres')

export default useGenres