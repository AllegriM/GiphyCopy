import { ApiKey, ApiUrl } from "./services"

export const getSingleGif = ( {id} ) => {
    return fetch(`${ApiUrl}/gifs/${id}?api_key=${ApiKey}`)
    .then(( resp ) => resp.json())   
    .catch( (error) => console.log(error) )
}