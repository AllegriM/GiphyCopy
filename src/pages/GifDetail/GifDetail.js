import { Box, Container, Spinner, Text } from "@chakra-ui/react"
import { Link, Redirect } from "wouter"
import Gif from "components/Gif"
import './detail.css'
import { useSingleGif } from "hooks/useSingleGif"
import { useTitle } from "hooks/useSEO"
import { Helmet } from "react-helmet"

export const GifDetail = ({ params }) => {

    const { gif, isLoading, error } = useSingleGif({ id: params.id })

    // Hook para SEO title
    const title = gif ? gif.title : ""
    useTitle({ title, description: `Detail of ${title}` })

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando ...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if (error) <Redirect to='/404' />
    if (!gif) return null
    // localStorage.setItem('detail', gifDetail)

    return (
        <>
            <Helmet>
                <title>{title} || GiffyLand</title>
                <meta name="description" content={title} />
            </Helmet>
            <Container display='flex' justifyContent='center' flexDirection='column' alignItems='center' pt='2em'>
                <Link to="/">
                    <Text fontSize='5rem' color='blue.400' cursor='pointer'>GiffyLand</Text>
                </Link>

                <Box pt='3em' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                    <Text>{gif.title}</Text>
                    <Box>
                        {
                            gif !== undefined
                                ?
                                <Gif className='detail-img' key={gif.id} data={gif} src={gif.images?.original.url} />
                                :
                                null
                        }
                    </Box>
                </Box>
            </Container>
        </>
    )
}
