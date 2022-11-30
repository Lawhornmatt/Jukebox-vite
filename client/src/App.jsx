import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // This might need to be @types/react-router-dom instead?
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import reactLogo from './assets/react.svg'
import './CSS/App.css'

import About from './components/About.jsx'
import Homepage from './components/Homepage.jsx'
import Room from './components/Room.jsx'
import Nav from './components/Nav';
import Login from './components/Login';
import { ChakraProvider } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              </Routes>
          </div>
        </Router>
    </ApolloProvider>
  )
}

export default App
