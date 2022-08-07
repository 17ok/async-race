import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
