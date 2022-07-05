import { ApiKey, ApiUrl } from "./services"

export default function fetchGifs (  {keyword} = {}  ) {
    return fetch(`${ApiUrl}/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
        .then(( resp ) => resp.json())        
        .catch( (error) => console.log(error) )
}