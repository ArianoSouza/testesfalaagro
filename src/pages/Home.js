import React from 'react';
import Navbar from '../components/Navbar';
import Carrossel from '../components/Carrossel';
import Categories from '../components/Categories';
import Footer from '../components/Footer'



function Home(){
    return(
    <div>
        <Navbar/> 
        <Carrossel/>
        <Categories/>
        <Footer/>
    </div>
      
    )
}

export default Home;