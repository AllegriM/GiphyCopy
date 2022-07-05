import { Box, Container, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";
import { SearchGif } from "../components/SearchGif"
import { TrendingSearches } from "../components/TrendingSearches";
import { useGifs } from "../hooks/useGifs";
import { ListOfGifs } from './SearchResults';

export const Home = () => {

    const [keyword, setKeyword] = useState("")

    const { loading, gifs } = useGifs({ keyword })

    return (
        <Container>
            <Box>
                <Text fontSize='2rem' textAlign='center' pt='2em'>Looking for that funny GIF?</Text>
                <SearchGif setKeyword={setKeyword} keyword={keyword} />
            </Box>
            <Flex flexDirection='column-reverse'>
                <Box mt='1em' mb='2em'>
                    <Text fontSize='1.25rem'>Ultimas busquedas</Text>
                    <ListOfGifs params={keyword} />
                </Box>
                <TrendingSearches />
            </Flex>
        </Container>
    )
}