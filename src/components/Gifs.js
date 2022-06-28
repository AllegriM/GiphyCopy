import { CircularProgress, Grid } from "@chakra-ui/react"
import { Gif } from "./Gif"

export const Gifs = ( {gifs, loading, params} ) => {

    const { keyword } = params 

    return (
        <Grid className="ListOfGifs">        
            {
                loading ? 
                <CircularProgress isIndeterminate />
                :
                gifs.map((singleGif) => 
                <Gif key={singleGif.id} src={singleGif.images.original.url} data={singleGif}/>)
            }
        </Grid>
    )
}