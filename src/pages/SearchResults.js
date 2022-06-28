import { Box, Button, CircularProgress, Container, Grid, GridItem} from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Gif } from "../components/Gif";
import { useLocation } from "wouter";
import { useGifs } from "../hooks/useGifs";
import './listOfGifs.css'

export const ListOfGifs = ( {params} ) => {

    const { keyword } = params

    const {loading, gifs} = useGifs( {keyword} )

    const [location, setLocation] = useLocation()

    const goHome = () => {
        setLocation('/')
    }

    return (
        <Container textAlign='center'>
            <Box textAlign='start' py='1em'>
                <Button bg= '#282c34' onClick={goHome} border='1px solid white' _hover={{ bg: 'none' }} leftIcon={<ArrowBackIcon />}>Ir al Inicio</Button>
            </Box>
            {
                loading ? 
                <CircularProgress isIndeterminate />
                :
                <Grid className="ListOfGifs">        
                    {
                    gifs.map((singleGif) => 
                    <Gif key={singleGif.id} src={singleGif.images.original.url} data={singleGif}/>)
                    }
                </Grid>
            }
        </Container>
    )
}
