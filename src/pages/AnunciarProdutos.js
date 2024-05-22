import React, { useState } from 'react';
import Style from '../styles/AnunciarProdutos.module.css';
import logo from '../img/logo.png'
function Anunciar() {
  
    return (
        <div className={Style.background}>
        <div className={Style.divmae}>
                <header className={Style.header}>
                <img className={Style.imglogo} src={logo} alt="Logotipo da empresa"/>
                </header>
            <div className={Style.conteiner}>
        <form className={Style.form}>
        <h1 className={Style.h1}>Cadastro de Produtos</h1>
        <section className={Style.section}>
                <h2 className={Style.h2}>Informações Básicas do Produto</h2>

                <div className={Style.campo}>
                    <label className={Style.label} for="nome-produto">Nome do Produto:</label>
                    <input className={Style.input} type="text" name="nome-produto" required/>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="descricao-completa">Descrição Completa:</label>
                    <textarea className={Style.textarea} name="descricao-completa" required></textarea>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="categoria">Categoria:</label>
                    <select className={Style.selectCategoria} name="categoria" required>
                        <option value="">Selecione a Categoria</option>
                        <option value="">Selecione a Categoria</option>
                        <option value="">Selecione a Categoria</option>
                        <option value="">Selecione a Categoria</option>
                    </select>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="marca">Marca:</label>
                    <input className={Style.input} type="text" name="marca" required/>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="preco">Preço:</label>
                    <input className={Style.input} type="number" name="preco" step="0.01" required/>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="disponibilidade">Disponibilidade em Estoque:</label>
                    <input className={Style.input} type="number" name="disponibilidade" required/>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="peso">Peso (em kg):</label>
                    <input className={Style.input} type="number"  name="peso" required/>
                </div>

                <div className={Style.campo}>
                    <label className={Style.label} for="dimensao">Dimensões (A x L x P em cm):</label>
                    <input className={Style.input} type="text" name="dimensao" placeholder="A x L x P (cm)" required/>
                </div>
            </section>

            <section id="secao-2">
                <h2 className={Style.h2}>Imagens e Vídeos</h2>
                <div className={Style.campo}>
                    <label className={Style.label} for="imagem-principal">Imagem Principal:</label>
                    <input className={Style.input} type="file" name="imagem-principal" accept="image/*" required/>
                </div>
                <div className={Style.campo}>
                    <label className={Style.label} for="imagem-principal">Imagem Opcional:</label>
                    <input className={Style.input} type="file" id="imagem-principal" name="imagem-principal" accept="image/*"/>
                </div>
                <div className={Style.campo}>
                    <button className={Style.botao} type="submit">Anunciar</button>
                </div>
               
            </section>

            
        </form>
        </div>
        </div>
        </div>
    );
  }

export default Anunciar