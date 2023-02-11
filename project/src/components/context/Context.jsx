import React from "react"

//store
export const store = React.createContext({

});


// provider
const ContextProvider = ({children}) => {


    return(
        <store.Provider>
            {children}
        </store.Provider>
    )
}

export default ContextProvider