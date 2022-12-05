import React, { useState, useContext } from 'react';
// import createId from './createId';

// Create our theme context using React.CreateContext()
export const UserContext = React.createContext();
export const UserUpdateContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const accessUser = () => useContext(UserContext);
export const updateUser = () => useContext(UserUpdateContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function UserProvider({ children }) {
  const [user, setUser] = useState('No User Logged In');

  function changeUser(e, userData) {
    console.log(e);
    console.log(userData);
    setUser('CLicked');
  }

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={changeUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}