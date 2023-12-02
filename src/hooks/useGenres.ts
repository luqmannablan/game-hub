import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id: number
    name: string

}

interface FetchGenreResponse {
    count: number
    results: Genre[]
}

// hiding certain details like '/genres' here 
const useGenres = () => useData<Genre>('/genres')

export default useGenres