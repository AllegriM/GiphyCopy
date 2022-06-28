// Creacion de un Custom Hook

import { useContext, useEffect, useState } from "react";
import { GifsContext } from "../context/GifsContext";
import fetchGifs from "../helpers/fetchGifs";

export function useGifs( { keyword } = {keyword: null} ) {

    const [loading, setLoading] = useState(false)

    const {gif, setGif} = useContext(GifsContext)

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true)
        // Si hay keyword se recupera del local storage sino uso default
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        // if (keyword) localStorage.setItem('lastKeyword', keyword)
        fetchGifs({ keyword: keywordToUse })
            .then((data) => {
                setGifs(data.data)
                setGif(data.data)
                setLoading(false)
                // guardo key en local storage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword])

    return {loading, gifs}
}
