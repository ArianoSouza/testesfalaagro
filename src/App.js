import React from 'react';
import './App.css';
import Indexnavbar from './components/Navbar'
import Categories from './components/Categories';
import Carrossel from './components/Carrossel';


function App() {
  return (
  <div>
    <Indexnavbar/>
    <Categories/>
    <Carrossel/>
  </div>
  );
}

export default App;
