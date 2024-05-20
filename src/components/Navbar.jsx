import React from 'react';
import '../styles/Indexnavbar.css'
import Logo from '../img/Logo.svg'
import basket from '../img/basket.svg'



function Indexnavbar(){
    return(
      <div className='container'>
        <img src={Logo} alt="Logo" id='logo-nav'/>
        <input type="text" placeholder='Buscar...' id='input-nav'/>
        <button id='botao-carrinho-nav'><img src={basket} alt="Carrinho" id='carrinho-img'/></button>
        <button id='botao-entrar-nav' >Entrar</button>
      </div>
    )
}

export default Indexnavbar;