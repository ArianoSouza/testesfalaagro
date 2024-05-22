import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Produtos from "../pages/Produto";

function AllRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Produtos' Component={Produtos}/>
        </Routes>
      </BrowserRouter>
    )
}

export default AllRoutes;
