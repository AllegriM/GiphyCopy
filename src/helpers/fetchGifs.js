import { useState } from "react"

const ApiKey = "xH0todBwPrh58cglIgudFgTI81I9HWdc"

export default function fetchGifs (  {keyword} = {}  ) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
        .then(( resp ) => resp.json())        
        .catch( (error) => console.log(error) )
}