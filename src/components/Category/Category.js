import { Box, Text } from "@chakra-ui/react"
import { Link } from "wouter"

export const Category = ({title, options}) => {
    return (
        <Box my='2em' mb='1em'>
            <Text fontWeight='600'>{title}</Text>
            {
                options.map( (trend, index) => {
                    return(
                        <Link key={index} href={`/search/${decodeURI(trend)}`} >
                            <Text cursor='pointer' display='inline-block' m='0' mr='.25em' color='#e2dcdc' fontSize='25px'>{trend}</Text>
                        </Link>
                    )
                })
            }
        </Box>
    )
}
