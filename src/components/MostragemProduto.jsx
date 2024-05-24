import React, { useEffect, useState } from "react";
import styles from '../styles/MostragemProduto.module.css'
import '../styles/MostragemProduto.module.css'
function MostragemProduto(){

    const Produto = {
        nome: 'Britadeira inox de luxo',
        desc:'è um utensilho muitoútil',
        imgs: [require("../img/vaca.jpeg"),require("../img/vaca.jpeg"),require("../img/vaca.jpeg"),require("../img/vaca.jpeg")],
        preço: 500.99 , 
    }
    const [transGrande,setTransGrande] = useState(18)

    const imgMapGrande = Produto.imgs.map((img,index)=>  (<img src={Produto.imgs[index]} alt="image" className={styles.MostragemGrande}/>))
    const imgMapPequena = Produto.imgs.map((img,index)=> (<img src={Produto.imgs[index]} alt="image" className={styles.MostragemPequena}/>))
    const transDireita = ()=>{
        let tamanhoMin = (-34 * (Produto.imgs.length-1))+18
        if (transGrande <= tamanhoMin){
            setTransGrande(transGrande+0)
        } else{
            setTransGrande(transGrande-34)
        }
    }
    const transEsquerda = ()=>{
        if (transGrande >=18){
            setTransGrande(transGrande+0)
        } else{
            setTransGrande(transGrande+34)
        }
    }


    useEffect(()=>{
        const translateImgGrande = document.getElementById('imagensGrandes')
        translateImgGrande.style.transform = `translateX(${transGrande}vw)`
        console.log(translateImgGrande.style.transform)

    },[transDireita,transEsquerda])

    return(
        <div className={styles.containerMostragemGeral}>
            <div className={styles.containerMostragemImagens}>
                <h1 className={styles.titulo}>{Produto.nome}</h1>
                <div className={styles.containerImagemGrande}>
                    <button className={styles.botaoCarroselGrande} onMouseDown={transEsquerda}>/--</button>
                    <div className={styles.limitImagemGrande}>
                        <div className={styles.imagensGrandes} id="imagensGrandes">
                            {imgMapGrande}
                        </div>
                    </div>
                    <button className={styles.botaoCarroselGrande} onMouseDown={transDireita}>--\</button>
                </div>
            </div>
            <div>
                <h1>R${Produto.preço}</h1>
                <h1>Descrição</h1>
                <p>{Produto.desc}</p>
            </div>
        </div>

    )
}

export default MostragemProduto;