import React from "react";
import useGlobalState from './useGlobalState';
import GlobalContext from './context';

const GlobalStateProvider = ({children}) => {
    return (
        <GlobalContext.Provider value={useGlobalState()}>{children}</GlobalContext.Provider>
    )
};

export default GlobalStateProvider;