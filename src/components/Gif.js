import { GridItem, Img, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link } from "wouter"
import StaticContextProvider, { StaticContext } from "../context/StaticContext"

export const Gif = ( {src, data} ) => {

    return (
        <GridItem _hover={{border: "1px solid white"}} h='auto'>
            <Link to={`/gif/${data.id}`}>
                <Text></Text>       
                <Img w='100%' src={src} alt="imagen de meme"/>
            </Link>
        </GridItem>
    )
}
