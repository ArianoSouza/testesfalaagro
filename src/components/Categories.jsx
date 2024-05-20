import React from "react";
import '../styles/Categories.css'
import heavymachine from '../img/heavymachine.svg'

function Categories(){
    return(
        <div id="container">
            <div className="margin-ajust">
                <div className="categorie-item">
                    <div className="container-types-img"><img src={heavymachine} alt="" className="types-img"/></div>
                    <p>Maquinário pesado</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src="" alt="" className="types-img"/></div>
                    <p>Maquinário leve</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src="" alt="" className="types-img"/></div>
                    <p>Produtos agrícolas</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src="" alt="" className="types-img" /></div>
                    <p>Animais</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;