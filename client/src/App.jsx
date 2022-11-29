import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // This might need to be @types/react-router-dom instead?
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import reactLogo from './assets/react.svg'
import './CSS/App.css'

import About from './pages/about.jsx'
import Home from './pages/Home.jsx'
import Room from './pages/Room.jsx'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/about" 
                element={<About/>}
              />
              <Route 
                path="/" 
                element={<Home/>}
              />
              <Route 
                path="/room" 
                element={<Room/>}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
