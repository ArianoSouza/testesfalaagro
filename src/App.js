import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import AllRoutes from './components/allRoutes.js';

function App() {
  return (
    <AllRoutes/>
  );
}

export default App;
