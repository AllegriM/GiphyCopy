import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import { Gif } from "../components/Gif"
import { GifsContext } from "../context/GifsContext"

export const GifDetail = ( {params} ) => {

    // const paramsCut = params.id.slice(0,-3)
    // console.log(params.id)

    const {gif} = useContext(GifsContext)

    const gifDetail = gif.find((singleGif) => singleGif.id === params.id)

    return (
        <Box>
            {
                gifDetail !== undefined 
                ?
                <Gif key={gifDetail.id} data={gifDetail} src={gifDetail.images.original.url} />            
                : 
                null
            }
        </Box>
    ) 
}
