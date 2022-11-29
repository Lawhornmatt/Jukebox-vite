import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about'
import Room from './Room'

const Home = () => {
    return (
      <div className="App">
        <h1>Vite + React</h1>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/room">Topics</Link>
              </li>
            </ul>

            <hr />
            
          </div>
      </div>
    )
}
export default Home;
