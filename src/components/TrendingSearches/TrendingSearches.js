import { Category } from "components/Category"
import fetchTrendGifs from "helpers/getTrendGifs"
import { useEffect, useState } from "react"

// Le quito el export default a TrendingSearches
export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        fetchTrendGifs()
            .then(data => setTrends(data.data))
    }, [])

    return (
        <Category title='Trending' options={trends} />
    )
}