import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Login from './components/Login';
import Infoplacard from './components/Infoplacard';
import Infoplacard2 from './components/Infoplacard2';

function App() {
  return (
    <div className="App">
            <Login/>
            <Infoplacard/>
            <Infoplacard2/>
      </div>
        );
     }

export default App;
