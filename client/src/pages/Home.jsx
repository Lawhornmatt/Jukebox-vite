import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './about'
import Room from './Room'
import Homepage from '../components/Homepage';


const Home = () => {
    
    
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = <Homepage></Homepage>;
  root.render(element);
    
}
export default Home;
