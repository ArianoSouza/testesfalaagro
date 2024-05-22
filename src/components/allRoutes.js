import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function AllRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/Login' Component={Login}/>
        </Routes>
      </BrowserRouter>
    )
}

export default AllRoutes;
