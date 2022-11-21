import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      
      <Router>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          {/* TODO needs implementation */}
          {/* <Route path='/view/:id' element={<ViewMeme />} /> */}
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
