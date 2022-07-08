import { Button, CircularProgress, Container, Text } from "@chakra-ui/react";
import { useGifs } from "hooks/useGifs";
import "./listOfGifs.css"
import { ListOfGifs } from "components/ListOfGifs";
import { Link } from "wouter";

export const SearchResults = ( { params  } ) => {

    const { keyword } = params

    const { gifs, loading, setPage } = useGifs({ keyword })

    console.log(keyword)

    const handleNextPage = () => setPage(prevPage => prevPage + 1)
    

    return (
        <Container textAlign='center' minH='100vh'>
            <Link to="/">
                <Text fontSize='5rem' color='blue.500' cursor='pointer'>GiffyLand</Text>
            </Link>
            {
                loading ?
                    <CircularProgress isIndeterminate />
                    :
                    <>
                        <Text textAlign='start'>{decodeURI(keyword)}</Text>
                        <ListOfGifs gifs={gifs} />
                    </>
            }
            <Button bg={"blue.600"}  _hover={{bg:"blue.600"}} mb='1em' onClick={handleNextPage}>Go to next page</Button>
        </Container>
    )
}
