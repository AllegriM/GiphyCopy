import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { ListOfGifs } from "components/ListOfGifs";
import { SearchGif } from "components/SearchResults/SearchGif"
import { LazyTrending } from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";

export const Home = () => {
    
    const { gifs } = useGifs()

    console.log(gifs)

    return (
        <Container>
            <Box>
                <Text fontSize='2rem' textAlign='center' pt='2em'>Looking for that funny GIF?</Text>
                <SearchGif />
            </Box>
            <Flex flexDirection='column-reverse'>
                <Box mt='1em' mb='2em'>
                    <Text fontSize='2rem' fontWeight='600'>Ultimas busquedas</Text>
                    <ListOfGifs gifs={gifs} />
                </Box>
                <LazyTrending />
            </Flex>
        </Container>
    )
}