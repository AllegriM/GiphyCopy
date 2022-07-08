import { Input } from "@chakra-ui/react"
import { useState } from "react"
import { useLocation } from "wouter";

export const SearchGif = () => {
    
    const [keyword, setKeyword] = useState("")

    const [location, setLocation] = useLocation();

    const handleSubmit = e => {
        e.preventDefault()
        setLocation(`/search/${keyword}`)
    }

    const handleChange = e => {
        setKeyword(e.target.value) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input placeholder="Search a funny meme..." padding='.5em' fontSize='1.5rem' color='white' fontWeight='600' type='text' onChange={handleChange} value={keyword} />
        </form>
    )
}