import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import { Gif } from "../components/Gif"
import { GifsContext } from "../context/GifsContext"
import './detail.css'

export const GifDetail = ( {params} ) => {

    const {gif} = useContext(GifsContext)

    const gifDetail = gif.find((singleGif) => singleGif.id === params.id)

    return (
        <Box>
            {
                gifDetail !== undefined 
                ?
                <Gif className='detail-img' key={gifDetail.id} data={gifDetail} src={gifDetail.images.original.url} />            
                : 
                null
            }
        </Box>
    ) 
}
