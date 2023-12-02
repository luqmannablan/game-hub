import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number
    name: string

}

interface FetchGenreResponse {
    count: number
    results: Genre[]
}
const useGenres = () => {

    const [genres, setGenre] = useState<Genre[]>([])

    // to set the error
    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false)


    // we use useEffect to get the data for the games
    useEffect(() => {
        const controller = new AbortController()


        setLoading(true)
        apiClient.get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenre(res.data.results)
                setLoading(false)

            })
            .catch(err => {
                if (err instanceof CanceledError) return // since we are in strict mode it does it twice this makes it so it cancels the first time if it doesn't happen then we got to error message
                setError(err.message)
                setLoading(false)
            })


        return () => controller.abort()

    }, [])

    return { genres, error, isLoading }
}

export default useGenres