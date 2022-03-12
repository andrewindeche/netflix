import './App.css';
import Login from './components/Login';
import React from 'react';
import styled from 'styled-components';

function App() {
  return (
   <div className="App">
    <Login />
    </div>
  );
}
const Img = styled.div`
width: 10px;
height: auto;
`;
export default App;
