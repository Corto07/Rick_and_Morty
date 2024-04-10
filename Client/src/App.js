import "./App.css";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Detail from "./Pages/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Home from "./components/Home/Home";
import FormCrear from "./Pages/FormCrear/FormCrear";
import Episodes from "./Pages/Episodes/Episodes";
import Location from "./Pages/Location/Location";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/:id" element = {<Detail/>}/>
        <Route path="/episodes/:id" element={<Detail/>}/>
        <Route path="/location/:id" element={<Detail/>}/>  
        <Route path = "*" element = {<Error404/>}/>
        <Route path = "/forma" element = {<FormCrear/>}/>
        <Route path = "/episodes" element = {<Episodes/>}/>
        <Route path = "/location" element = {<Location/>}/>
      </Routes>
    </div>
  );
}

export default App;