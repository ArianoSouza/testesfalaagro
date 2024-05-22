import React from "react";
import { useState } from "react";
import '../Styles/Carrossel.css'
import image1 from '../img/carrossel1.jpeg'
import image2 from '../img/carrossel2.jpg'
import image3 from '../img/carrossel3.jpeg'
import { useEffect } from "react";

function Carrossel(){
    
    return(
        <div>
            <div id="container-carrossel">
                <div className="carrossel-count" id="Carrossel-1">
                    <div id="continer-text-carrossel" >
                        <h2>Título1</h2>
                        <p>descrição aqui</p>
                    </div>
                    <div id="continer-text-carrossel2">
                        <h2>titulo2</h2>
                        <p>descrição aqui</p>
                    </div>
                    <div id="continer-text-carrossel3">
                        <h2>Titulo3</h2>
                        <p>descrição aqui</p>
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