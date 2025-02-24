import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Routes/Home';
import Experience from './Routes/Experience';
import Galary from './Routes/Galary';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />}  />
        <Route path={"/gallery"} element={<Galary />}  />
        <Route path={"/experience"} element={<Experience />}  /> 
      </Routes>
    </Router>
  )
}

export default App
