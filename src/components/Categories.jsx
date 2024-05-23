import React from "react";
import '../styles/Categories.css'
import heavymachine from '../img/heavymachine.svg'
import maqLeves from '../img/hammer.svg'
import prodAgro from '../img/flower1.svg'
import vaca from '../img/cow_2303763.png'

function Categories(){
    return(
        <div id="container">
            <div className="margin-ajust">
                <div className="categorie-item">
                    <div className="container-types-img"><img src={heavymachine} alt="" className="types-img"/></div>
                    <p>Maquinário pesado</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src={maqLeves} alt="" className="types-img"/></div>
                    <p>Maquinário leve</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src={prodAgro} alt="" className="types-img"/></div>
                    <p>Produtos agrícolas</p>
                </div>
                <div className="categorie-item">
                    <div className="container-types-img"><img src={vaca} alt="" className="types-img" /></div>
                    <p>Animais</p>
                </div>
            </div>
        </div>
    )
}

export default Categories;