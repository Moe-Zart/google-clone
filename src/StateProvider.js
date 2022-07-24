import React, { createContext, useContext, useReducer } from "react";


//preparing the data layer
export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }
) => (
    <StateContext.Provider value={useReducer(reducer, initialState)
    }
    >
        {children} 
    </StateContext.Provider>
);
//initialstate is what that data layer looks like when it is loaded
//the reducer listens to changes that will be needed for the data layer
//the children refers to App.js, shoen in index.js



//Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);