import genres from '../data/genres'

export interface Genre {
    id: number
    name: string
    image_background: string

}

// hiding certain details like '/genres' here 
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres