import { CircularProgress, Container, Text } from "@chakra-ui/react";
import { useGifs } from "../hooks/useGifs";
import './listOfGifs.css'
import { Gifs } from "../components/Gifs";

export const ListOfGifs = ({ params }) => {

    const { keyword } = params

    const { loading, gifs } = useGifs({ keyword })

    return (
        <Container textAlign='center'>
            {
                loading ?
                    <CircularProgress isIndeterminate />
                    :
                    <>
                        <Text textAlign='start'>{decodeURI(keyword)}</Text>
                        <Gifs loading={loading} gifs={gifs} />
                    </>
            }
        </Container>
    )
}
