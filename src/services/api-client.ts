import axios from "axios"
// this is where the api key is
// note should not do it this way it is better to put it in an Enviornment variable
// where the enviornment variables are secret configuration values that can be set outside the code 
// avoid storing API keys in client apps like our GameHub app
// for a more secure solution we can build a custom backend server that acts as  a proxy between the client app and the external API 


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7fe82aa4c16248e9868e3c62b3bc09f5'
    }
})