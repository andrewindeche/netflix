import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Login from './components/Login';
import Infoplacard from './components/Infoplacard';

function App() {
  return (
    <div className="App">
            <Login/>
            <Infoplacard/>
      </div>
        );
     }

export default App;
