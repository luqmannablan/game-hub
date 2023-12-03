import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<T> {
    count: number
    results: T[]
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([])

    // to set the error
    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false)


    // we use useEffect to get the data for the games
    useEffect(() => {
        const controller = new AbortController()

        // we pass the genre as a query string parameter
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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

    }, deps ? [...deps] : [])
    //
    // we need to pass an array of dependencies so we need to get the games that match teh selected genre

    return { data, error, isLoading }
}

export default useData