import axios from "axios"


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7fe82aa4c16248e9868e3c62b3bc09f5'
    }
})