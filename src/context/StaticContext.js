import { createContext, useState } from "react";

export const StaticContext = createContext([])

const StaticContextProvider = ( {children} ) => {

    const [state, setState] = useState([])

    return(
        <StaticContext.Provider value={
            {mensaje: "Hola"}
            }>
            {children}
        </StaticContext.Provider>
    )
}

export default StaticContextProvider
