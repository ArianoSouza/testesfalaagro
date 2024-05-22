import { React } from "react";
import '../styles/DestaquesProdutos.css';
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
const [Prodnav,setProdNav] = useState(false)
const navigate = useNavigate()
function navigateToProducts(){
  setProdNav(true)
}



const mapProdutos = Produtos.map(function setProdMap(Prod) { 
  return(
    `<div
    className= "container-produtos" 
    id="todos-produtos" 
    style="display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 1vw;
            width: 20vw;
            height: auto;
            cursor: pointer;
            border-radius: 15px;
            background-color: rgb(245, 245, 245);
            box-shadow: 2px 2px 7px black;"
    >
    <img src=${Prod.img} alt="" style="width: 100%; height: auto; border-top-left-radius: 15px; border-top-right-radius: 15px;"/>
    <p>${Prod.nome}</p>
    <p style=" width: 100%; height: 4vw; ">${Prod.descrição}</p>   
    </div>`
    
  )
}).join('')

// console.log(todosProdutos)


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
   
    
    useEffect(()=>{
      if (Prodnav === true){
        navigate('/Produtos')
      }
    })
    
    

    useEffect(()=>{
     
      const prodInerHTML = document.getElementById('all-products')

      prodInerHTML.innerHTML=mapProdutos
      
    },[])

    useEffect (()=>{
        let containerAllProductsTranslate = document.getElementById('all-products')

        containerAllProductsTranslate.style.transform =`translateX(${value}%)`
        
        console.log(value)

    },[changeValueMinus,changeValuePlus])

 


  
        return (
        <div className="container-destaques">
            <button onMouseDown={changeValuePlus} className="button-carrossel"> <img src={leftButton} alt="" /> </button>
            <div className="carrossel-itens-ajust">
                <div className="container-all-products" id="all-products"></div>
            </div>
            <button onMouseDown={changeValueMinus} className="button-carrossel"> <img src={rightButton} alt="" /> </button>
        </div>
        )
        
}

export default DestaquesProdutos;