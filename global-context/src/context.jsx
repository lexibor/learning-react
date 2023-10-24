import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) =>
{
    const [name, setName] = useState('Samwise');

    return (
        <GlobalContext.Provider value={{name, setName}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;