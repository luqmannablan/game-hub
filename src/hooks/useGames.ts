import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
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


    // we use useEffect to get the data for the games
    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })


        return () => controller.abort()

    }, [])

    return { games, error }

}

export default useGames