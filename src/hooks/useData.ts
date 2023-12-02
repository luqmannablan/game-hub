import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FetchResponse<T> {
    count: number
    results: T[]
}
const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([])

    // to set the error
    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false)


    // we use useEffect to get the data for the games
    useEffect(() => {
        const controller = new AbortController()


        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then(res => {
                setData(res.data.results)
                setLoading(false)

            })
            .catch(err => {
                if (err instanceof CanceledError) return // since we are in strict mode it does it twice this makes it so it cancels the first time if it doesn't happen then we got to error message
                setError(err.message)
                setLoading(false)
            })


        return () => controller.abort()

    }, [])

    return { data, error, isLoading }
}

export default useData