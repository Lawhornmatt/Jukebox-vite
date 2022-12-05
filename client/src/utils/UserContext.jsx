import React, { useState, useContext } from 'react';
// import createId from './createId';

// Create our theme context using React.CreateContext()
export const UserContext = React.createContext();

// Create a custom hook that allows easy access to our ThemeContext values
export const accessUser = () => useContext(UserContext);

// Creating our theme provider. Accepts an argument of "props", here we plucking off the "children" object.
export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const loginUser = (user) => {
    // const newID = createId(users);
    const newUser = { ...user }; // This needs to be passed through when a user logins in

    setUsers([newUser]);
  };

  const logoutUser = (id) => {
    // const updatedCarList = users.filter((user) => user.id !== id);
    setUsers([]);
  };

  // The provider component will wrap all other components inside of it that need access to our global state
  return (
    // Dark theme and toggle theme are getting provided to the child components
    <UserContext.Provider value={{ users, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}