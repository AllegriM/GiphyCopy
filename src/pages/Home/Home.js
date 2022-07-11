import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { ListOfGifs } from "components/ListOfGifs";
import { SearchGif } from "components/SearchResults/SearchGif"
import { LazyTrending } from "components/TrendingSearches";
import { useGifs } from "hooks/useGifs";
import { useTitle } from 'hooks/useSEO'
import { Helmet } from "react-helmet";

export const Home = () => {

    const { gifs } = useGifs()

    const title = gifs ? `Searching Results |` : " null"
    useTitle({ title })


    return (
        <>
            <Helmet>
                <title>Home || GiffyLand</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container maxW='70ch'>
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
        </>

    )
}