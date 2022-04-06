import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import LandingPage from './components/LandingPage';
import Infoplacard from './components/Infoplacard';
import Infoplacard2 from './components/Infoplacard2';
import Infoplacard3 from './components/Infoplacard3';
import Faqs from './components/Faqs';
import Bottomnav from './components/Bottomnav';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
      <>
    <div className="App">
      <Router>
        <Nav/>
          <Routes>
            <Route exact path="/">
             <LandingPage/>
              <Infoplacard/>
              <Infoplacard2/>
              <Infoplacard3/>
              <Faqs/>
              <Bottomnav/>
              </Route>
              <Route exact path="/home">
              <Home/>
              </Route>
        </Routes>
      </Router>
      </div>
      </>
        );
     }

export default App;
