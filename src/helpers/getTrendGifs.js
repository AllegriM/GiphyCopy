import { ApiKey, ApiUrl } from "./services"

export default function fetchTrendGifs ( ) {
    return fetch(`${ApiUrl}/trending/searches?api_key=${ApiKey}`)
        .then(( resp ) => resp.json())
        .catch( (error) => console.log(error) ) 
}