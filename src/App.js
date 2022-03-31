import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import LandingPage from './components/LandingPage';
import Infoplacard from './components/Infoplacard';
import Infoplacard2 from './components/Infoplacard2';
import Infoplacard3 from './components/Infoplacard3';
import Faqs from './components/Faqs';
import Bottomnav from './components/Bottomnav';
import Row from './components/Row';

function App() {
  return (
      <>
    <div className="App">
            <LandingPage/>
            <Infoplacard/>
            <Infoplacard2/>
            <Infoplacard3/>
            <Faqs/>
            <Bottomnav/>
            <Row/>
          </div>
          </>
        );
     }

export default App;
