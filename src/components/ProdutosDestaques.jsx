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
   
    
    const Produtos = [
      {
          nome: "Trator Agrícola",
          descrição: "Máquina utilizada para realizar atividades agrícolas como aragem, plantio e colheita.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Semente de Milho",
          descrição: "Semente utilizada para o plantio de milho, uma das culturas mais importantes em diversas partes do mundo.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Fertilizante Orgânico",
          descrição: "Produto utilizado para fornecer nutrientes às plantas de forma natural e sustentável.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Colheitadeira",
          descrição: "Máquina utilizada para a colheita de grandes áreas de cultivo, como grãos e cereais.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Adubo Químico",
          descrição: "Produto químico utilizado para fertilizar o solo e promover o crescimento das plantas.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Enxada",
          descrição: "Ferramenta manual utilizada para cavar e revolver o solo.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Ração para Gado",
          descrição: "Alimento balanceado desenvolvido para a nutrição de gado de corte ou leiteiro.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Plantadeira",
          descrição: "Máquina utilizada para o plantio de sementes em linhas, garantindo espaçamento uniforme.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Pulverizador Agrícola",
          descrição: "Equipamento utilizado para aplicar defensivos agrícolas como pesticidas e herbicidas.",
          img: require("../img/vaca.jpeg")
      },
      {
          nome: "Estufa Agrícola",
          descrição: "Estrutura destinada ao cultivo protegido de plantas, proporcionando condições controladas de temperatura e umidade.",
          img: require("../img/vaca.jpeg")
      }
  ];
  

  

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
    
    const checkProducs = (prod,index) => {
      while (index < 9){
      return(
            <div className={styles.containerProduto}>
              <Link to='/Produtos'><img src={Produtos[index].img} alt="" className={styles.imgStyle}/></Link>
              <p>{Produtos[index].nome}</p>
              <p style={{textAlign: "center"}}>{Produtos[index].descrição}</p>
            </div>

      )
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
                  {Produtos.map(checkProducs)}
                </div>
            </div>
            <button onMouseDown={changeValueMinus} className={styles.buttonCarrossel}> <img src={rightButton} alt="" /> </button>
        </div>
        )
        
}

export default DestaquesProdutos;