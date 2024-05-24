import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import MostragemProduto from '../components/MostragemProduto'



function Produtos(){
    return(
    <div>
        <Navbar/>
        <MostragemProduto/>
        <Link to='/'>return to home</Link>
    </div>
      
    )
}

export default Produtos;