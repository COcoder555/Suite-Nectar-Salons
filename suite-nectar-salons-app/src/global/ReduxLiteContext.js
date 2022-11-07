import React, {createContext,useState} from 'react'

const ReduxLiteContext = createContext()

const ReduxLiteProvider = ({children}) => {
    const[id, setID] = useState('')
    

    return(
        <ReduxLiteContext.Provider value = {{
            id, setID
        }}>
        {children}
        </ReduxLiteContext.Provider>
    )
}

export {ReduxLiteContext, ReduxLiteProvider}