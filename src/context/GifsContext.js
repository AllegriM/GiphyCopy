import { createContext, useState } from "react";

export const GifsContext = createContext([])

const GifsContextProvider = ( {children} ) => {

    const [gif, setGif] = useState([])

    return(
        <GifsContext.Provider 
        value={{
            gif,
            setGif
        }}>
            {children}
        </GifsContext.Provider>
    )
}

export default GifsContextProvider
