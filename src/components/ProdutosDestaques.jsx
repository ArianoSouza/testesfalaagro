import { React } from "react";
import styles from '../styles/DestaquesProdutos.module.css';
import { useEffect,useState } from "react";
import '../dados/produtos.json';
import vacaTeste from '../img/vaca.jpeg'
import leftButton from '../img/leftbutton.svg';
import rightButton from '../img/rightbutton.svg';
import { Link, useNavigate } from "react-router-dom";

function DestaquesProdutos(){
    const [value,setValue] = useState(0)
   
    const Produtos = [ {
        "nome": "Maçã",
        "descrição": "Uma fruta comestível de casca fina e polpa branca.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Cachorro",
        "descrição": "Um mamífero doméstico conhecido por sua lealdade aos humanos.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Montanha",
        "descrição": "Uma elevação natural da superfície terrestre, geralmente com um pico.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Livro",
        "descrição": "Um conjunto de páginas impressas ou em formato digital, contendo texto ou imagens.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Café",
        "descrição": "Uma bebida feita a partir dos grãos torrados da planta de café.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Computador",
        "descrição": "Uma máquina eletrônica capaz de processar dados e executar tarefas.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Futebol",
        "descrição": "Um esporte de equipe jogado com uma bola redonda entre dois times de onze jogadores.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Piano",
        "descrição": "Um instrumento musical de teclado que produz som através da vibração das cordas.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Universo",
        "descrição": "A totalidade do espaço, tempo, matéria e energia existentes.",
        "img": require("../img/vaca.jpeg")
      },
      {
        "nome": "Avião",
        "descrição": "Uma aeronave mais pesada que o ar, capaz de voar utilizando motores.",
        "img": require("../img/vaca.jpeg")
      }
]

// console.log(todosProdutos)
function retornaEstado (value){
  if (value.nome === "Maçã"){
  return value
}
}

const valorzao = Produtos.filter(retornaEstado)

console.log (valorzao)
console.log(valorzao[0].nome)



    function changeValuePlus(){
        if (value >= 0){
            setValue(value+0)
        }else{
        setValue(value+20)
    }
    }
    function changeValueMinus(){
        if (value < -50){
            setValue(value+0)
        }else{
        setValue(value-20)
    }
    }
   
  
    useEffect (()=>{
        let containerAllProductsTranslate = document.getElementById('all-products')

        containerAllProductsTranslate.style.transform =`translateX(${value}%)`
        

    },[changeValueMinus,changeValuePlus])

 


  
        return (
        <div className={styles.containerDestaques}>

            <button onMouseDown={changeValuePlus} className={styles.buttonCarrossel}> <img src={leftButton} alt="" /> </button>
            <div className={styles.carrosselItensAjust}>
                <div className={styles.containerAllProducts} id="all-products">
                  <div className={styles.containerProduto}>
                    <Link to='/Produtos'><img src={valorzao[0].img} alt="" className={styles.imgStyle}/></Link>
                    <p>{valorzao[0].nome}</p>
                    <p>{valorzao[0].descrição}</p>
                  </div>
                </div>
            </div>
            <button onMouseDown={changeValueMinus} className={styles.buttonCarrossel}> <img src={rightButton} alt="" /> </button>
        </div>
        )
        
}

export default DestaquesProdutos;