import { createContext, useState } from "react";

export const GifsContext = createContext([])

const GifsContextProvider = ( {children} ) => {

    const [gifs, setGifs] = useState([])
    
    return(
        <GifsContext.Provider 
        value={{
            gifs,
            setGifs
        }}>
            {children}
        </GifsContext.Provider>
    )
}

export default GifsContextProvider
