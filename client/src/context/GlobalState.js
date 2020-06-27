import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// initial state
const initialState = {
    isEmpty: true,
    beerResults: [],
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions, (signal reducer to update state)
    function getBeers(beerlist) {
        dispatch({
            type: 'BEER_LIST',
            payload: beerlist
        });
    }

    return (<GlobalContext.Provider value={{
        isEmpty: state.isEmpty,
        beerResults: state.beerResults,
        getBeers
    }}>
        {children}
    </GlobalContext.Provider>);
}

