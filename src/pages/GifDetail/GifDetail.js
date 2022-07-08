import { Box, Container, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "wouter"
import { Gif } from "components/Gif"
import { GifsContext } from "context/GifsContext"
import './detail.css'

export const GifDetail = ({ params }) => {

    const { gifs } = useContext(GifsContext)

    const gifDetail = gifs.find( singleGif => singleGif.id === params.id )
    localStorage.setItem('detail', gifDetail)

    return (
        <Container display='flex' justifyContent='center' flexDirection='column' alignItems='center' pt='2em'>
            <Link to="/">
                <Text fontSize='5rem' color='blue.400' cursor='pointer'>GiffyLand</Text>
            </Link>

            <Box pt='3em' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Text>{gifDetail.title}</Text>
                <Box w='500px' h='300px'>
                    {
                        gifDetail !== undefined
                            ?
                            <Gif className='detail-img' key={gifDetail.id} data={gifDetail} src={gifDetail.images?.original.url} />
                            :
                            null
                    }
                </Box>
            </Box>
        </Container>
    )
}
