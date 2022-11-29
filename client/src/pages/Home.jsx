import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about'
import Room from './Room'

const Home = () => {
    
    

    
    ReactDOM.render(
        <React.StrictMode>
            <div className="App">
    <div>
    </div>
    <h1>Vite + React</h1>
    <Router>
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
        <Routes>
        <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/room" component={Room} />
        </Routes>
      
    </div>
  </Router>
  </div>
        </React.StrictMode>,
        document.getElementById('root')
    )
        
    
}
export default Home;
