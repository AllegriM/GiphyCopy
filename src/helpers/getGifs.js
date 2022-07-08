import { ApiKey, ApiUrl } from "./services"

// const fromApiResponseToGifs = apiResponse => {
//     const {data = []} = apiResponse
//     return data
// }

export default function fetchGifs (  {limit = 25, keyword = {} , page = 0 } = {}  ) {
    // Offset === cuantos resultados voy a saltar (Asi hago paginacion)
    return fetch(`${ApiUrl}/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`)
        .then(( resp ) => resp.json())        
        .catch( (error) => console.log(error) )
}