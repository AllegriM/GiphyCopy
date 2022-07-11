import { getSingleGif } from "helpers/getSingleGif";
import { useEffect, useState } from "react";

const { useGifs } = require("./useGifs");

export const useSingleGif = ( {id} ) => {
    const {gifs} = useGifs()
    const gifFromCache = gifs.find( singleGif => singleGif.id === id )

    const [gif, setGif] = useState(gifFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if(!gif) {  
            setIsLoading(true)
            setError(false)
            // llamar al servicio si no tengo gif
            getSingleGif( {id} )
                .then(data => setGif(data.data))
                .catch(error=> {
                    setIsLoading(false)
                    setError(true)
                })
                setIsLoading(false)
        }
    }, [gif, id])
    

    return { gif, error, isLoading }
}
