import { CircularProgress } from "@chakra-ui/react"
import Gif from "components/Gif/index"

export const ListOfGifs = ( {gifs, loading = {}} ) => {
    
    return (
        <section>        
            {
                !loading ? 
                <CircularProgress isIndeterminate />
                :
                <div className="grid">
                    {
                    gifs.map((singleGif) => 
                    <Gif key={singleGif.id} src={singleGif.images?.original.url} data={singleGif}/>)
                    }
                </div>
            }
        </section>
    )
}