import { Box, Container, Text } from "@chakra-ui/react"
import { useState } from "react";
import { SearchGif } from "../components/SearchGif"
import { useGifs } from "../hooks/useGifs";
import { ListOfGifs } from './SearchResults';

export const Home = () => {

    const [keyword, setKeyword] = useState("")

    const {loading , gifs} = useGifs( {keyword} ) 

    return (
        <Container>
            <Box>
                <Text fontSize='2rem' textAlign='center' pt='2em'>Looking for that funny GIF?</Text>
                <SearchGif setKeyword={setKeyword} keyword={keyword}/>
            </Box>
            <Box mt='3em'>
                <Text fontSize='1.25rem'>Ultimas busquedas</Text>
                <ListOfGifs params={keyword} />
            </Box>
        </Container>
    )
}