import React from 'react';
import './index.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullLanding from './components/FullLanding';
import Nav from './components/Nav';

function App() {
  return (
      <>
    <div className="App"> 
      <Router>
        <Nav/> 
        <Routes>
        <Route exact path="/" element={<FullLanding/>} />
        <Route path="/home" element={<Home/>} />             
        </Routes> 
      </Router>        
      </div>
      </>
        );
     }

export default App;
