// Creacion de un Custom Hook

import { useContext, useEffect, useState } from "react";
import { GifsContext } from "context/GifsContext";
import fetchGifs from "helpers/getGifs";

const INITIAL_PAGE = 0

export function useGifs( { keyword } = { keyword: null } ) {

    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)

    // Si hay keyword se recupera del local storage sino uso default
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)
        // if (keyword) localStorage.setItem('lastKeyword', keyword)
        fetchGifs({ keyword: keywordToUse })
            .then( (data) => {
                setGifs(data.data)
                // guardo key en local storage
                localStorage.setItem('lastKeyword', keyword)
                setLoading(false)
            })
    }, [keyword, setGifs, keywordToUse])

    useEffect(() => {
        if (page === INITIAL_PAGE){
            return
        }else{
            setLoadingNextPage(true) 
            fetchGifs( {keyword: keywordToUse, page} )
                .then( (nextGifs) => {
                    setGifs(prevGifs => prevGifs.concat(nextGifs.data))
                    setLoadingNextPage(false)
                })
                
        }
    }, [page, keywordToUse, setGifs])

    
    return {loading, gifs, setPage, loadingNextPage}
}
