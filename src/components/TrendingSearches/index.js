import { useEffect, useState } from "react"
import fetchTrendGifs from "../../helpers/getTrendGifs"
import { Category } from "../Category/Category"
// import { ListOfGifs } from "../../pages/SearchResults"

export const TrendingSearches = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        fetchTrendGifs()
            .then(data => setTrends(data.data))
    }, [])

    return (
        <Category title='Trending' options={trends}/>
    )
}
