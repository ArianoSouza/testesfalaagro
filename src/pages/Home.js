import React from 'react';
import Navbar from '../components/Navbar';
import Carrossel from '../components/Carrossel';
import Categories from '../components/Categories';
import Footer from '../components/Footer'
import DestaquesProdutos from '../components/ProdutosDestaques'




function Home(){
    return(
    <div>
        <Navbar/> 
        <Carrossel/>
        <Categories/>
        <DestaquesProdutos/>
        <Footer/>
    </div>
      
    )
}

export default Home;