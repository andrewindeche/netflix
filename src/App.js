import React from 'react';
import './index.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullLanding from './components/FullLanding';
import Nav from './components/Nav';
import Movies from './components/categories/Movies';
import ErrorPage from './components/Error';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Nav/> 
        <Routes>
        <Route exact path="/" element={<FullLanding/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/home/movies/:selector" element={<Movies/>}/>  
        <Route path="*" element={<ErrorPage />} />         
        </Routes> 
      </Router>        
      </div>
        );
     }

export default App;
