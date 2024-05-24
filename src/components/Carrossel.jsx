import React from "react";
import { useState } from "react";
import '../styles/Carrossel.css'
import image1 from '../img/carrossel1.jpeg'
import image2 from '../img/carrossel2.jpg'
import image3 from '../img/carrossel3.jpeg'
import { useEffect } from "react";

function Carrossel(){
    
    const TeT = [
        {
            'id': 'cardbemvindo',
            'titulo':'Seja bem vindo ao FalaMarket!',
            'Descricao':'Aqui você encontra variedade e os melhores produtos Agro do mercado'
        },
        {
            'id': 'sessaomaquinas',
            'titulo':'Confira nossa sessão de Maquinas',
            'Descricao':'As melhores máquinas dos melhores fornecedores do nordeste de o Brasil'
        },
        {
            'id': 'façaseucadastro',
            'titulo':'Faça seu cadastro!',
            'Descricao':'Clique na sessão "Entrar" e venha fazer parte do maior Marketplace agro do nordeste'
        }
    ]


    const Cards = TeT.filter(value =>(value.id === 'cardbemvindo' || 'sessaomaquinas' ||'façaseucadastro'))

    return(
        <div>
            <div id="container-carrossel">
                <div className="carrossel-count" id="Carrossel-1">
                    <div id="continer-text-carrossel" >
                        <h1 className="shadow-box h1-text">{Cards[0].titulo}</h1>
                        <p className="shadow-box p-text">{Cards[0].Descricao}</p>
                    </div>
                    <div id="continer-text-carrossel2">
                        <h1 className="shadow-box h1-text">{Cards[1].titulo}</h1>
                        <p className="shadow-box p-text">{Cards[1].Descricao}</p>
                    </div>
                    <div id="continer-text-carrossel3">
                        <h1 className="shadow-box h1-text">{Cards[2].titulo}</h1>
                        <p className="shadow-box p-text">{Cards[2].Descricao}</p>
                    </div>
                    <img src={image1} alt=""  className="img-carrossel"/>
                    <img src={image2}  alt="" className="img-carrossel"/>
                    <img src={image3}  alt="" className="img-carrossel" />
                </div>
            </div>
        </div>
    )

}

export default Carrossel;