import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game { // with this we can use this interface else where in our code
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    // uses the interface Game to make sure we have the id and name in a list
    const [games, setGames] = useState<Game[]>([])

    // to set the error
    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false)


    // we use useEffect to get the data for the games
    useEffect(() => {
        const controller = new AbortController()


        setLoading(true)
        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
                setLoading(false)

            })
            .catch(err => {
                if (err instanceof CanceledError) return // since we are in strict mode it does it twice this makes it so it cancels the first time if it doesn't happen then we got to error message
                setError(err.message)
                setLoading(false)
            })


        return () => controller.abort()

    }, [])

    return { games, error, isLoading }

}

export default useGames