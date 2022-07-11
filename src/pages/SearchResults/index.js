import { Button, CircularProgress, Container, Text } from "@chakra-ui/react";
import { useGifs } from "hooks/useGifs";
import "./listOfGifs.css"
import { ListOfGifs } from "components/ListOfGifs";
import { Link } from "wouter";
import { useNearScreen } from "hooks/useNearScreen";
import { useCallback, useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import { useTitle } from "hooks/useSEO";
import { Helmet } from "react-helmet";

export const SearchResults = ({ params }) => {

    const { keyword } = params

    const { gifs, loading, setPage } = useGifs({ keyword })

    const { externalRef } = useRef()

    const { isNearScreen, fromRef } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false
        })

    const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : " null"
    useTitle( {title} )

    //const debounceHandleNextPage = useRef() //OPCION 1 con useRef()

    // //OPCION 2 con useCallback() => recibe array de dependencias para volver a crear esa funcion creada

    // const handleNextPage = () => setPage(prevPage => prevPage + 1)

    const handleNextPage = () => console.log("Next Page")

    // Se ejecuta handleNextPage siempre que este cerca del final de la pagina

    // debounceHandleNextPage.current = () => debounce( () => console.log("Next Page"), 1000 )
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200 
        ), [])
    
    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    },  [debounceHandleNextPage, isNearScreen])



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
                        <Helmet>
                            <title>{title}</title>
                            <meta name="description" content={title} /> 
                        </Helmet>
                        <Text textAlign='start'>{decodeURI(keyword)}</Text>
                        <ListOfGifs gifs={gifs} />
                        <div id="visor" ref={fromRef}></div>
                    </>
            }
            <Button bg={"blue.600"} _hover={{ bg: "blue.600" }} mb='1em' onClick={handleNextPage}>Go to next page</Button>
        </Container>
    )
}
