import { Spinner } from "@chakra-ui/react"
import { useNearScreen } from "hooks/useNearScreen"
import React, { Suspense } from "react"


const TrendingSearches = React.lazy(() => import("./TrendingSearches"))

// Determina si quiero o no mostrar Trending views dependiendo el VIEWPORT
// Cuando intersecciona con el item que quiero mostrar, hace la peticion a la api
export const LazyTrending = () => {

    // useRef = permite guardar valor entre renderizados sin alterarlo
    const { isNearScreen, fromRef } = useNearScreen( {distance:'100px'})

    return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
    </Suspense>
    </div>
}