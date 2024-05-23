import React from 'react';
import '../styles/Indexnavbar.css'
import Logo from '../img/Logo.svg'
import basket from '../img/basket.svg'
import { Link } from 'react-router-dom'



function Indexnavbar(){
    return(
      <div className='container'>
        <Link to="/"><img src={Logo} alt="Logo" id='logo-nav'/></Link>
        <input type="text" placeholder='Buscar...' id='input-nav'/>
        <button id='botao-carrinho-nav'><img src={basket} alt="Carrinho" id='carrinho-img'/></button>
        <button id='botao-anunciar-nav'><Link id= 'link-anunciar' to = '/Anunciar'>Anunciar</Link></button>
        <button id='botao-entrar-nav'><Link id= 'link-entrar' to = '/Login'>Entrar</Link></button>
        
      </div>
    )
}

export default Indexnavbar;