import React, { useReducer, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const UserContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const accessUserContext = () => useContext(UserContext);

import { initialState, reducer } from './reducers';

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function UserProvider({ children }) {
  const store = useReducer(reducer, initialState);

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    <UserContext.Provider value={ store }>
        {children}
    </UserContext.Provider>
  );
}