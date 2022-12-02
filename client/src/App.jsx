import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // This might need to be @types/react-router-dom instead?
import { ApolloClient, ApolloProvider, InMemoryCache,  createHttpLink, } from '@apollo/client';
import './CSS/App.css'
import { setContext } from '@apollo/client/link/context';

import About from './components/About.jsx'
import Login from './components/Login.jsx'
import Homepage from './components/Homepage.jsx'
import Room from './components/Room.jsx'
import Nav from './components/Nav';
import Contact from './components/Contact.jsx'

import { ChakraProvider } from '@chakra-ui/react';
import Signup from './components/Signup';
import UserProvider from './utils/UserContext';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
            <Nav />
              <Routes>
                <Route 
                  path="/about" 
                  element={<About/>}
                />
                <Route 
                  path="/" 
                  element={<Homepage/>}
                />
                <Route 
                  path="/room" 
                  element={<Room/>}
                />
                <Route 
                  path="/login" 
                  element={<Login/>}
                />
                <Route 
                  path="/contact" 
                  element={<Contact/>}
                />
                <Route 
                  path="/signup" 
                  element={<Signup/>}
                />
              </Routes>
          </div>
        </Router>
      </UserProvider>
    </ApolloProvider>
  )
}

export default App
