import "./App.css";
import React from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
    
  const [ characters, setCharacters ] = useState([])
    
  const navigate = useNavigate();
    
  const [access, setAccess] = useState (false)
  const EMAIL = "claudiocarruz@gmail.com";
  const PASSWORD = "123456";
  
    const location = useLocation();
    const isHome = location.pathname === "/";

    function login (userData) {
      // Verificar si la información de usuario coincide
      if (userData.email === EMAIL && userData.password === PASSWORD) {
        setAccess(true);
        navigate('/home');
     }
    }  

    useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

  const onSearch = (id) => {
    if(!id) alert('Ingresa un ID')
    if(characters.find(char => char.id === parseInt(id) )){
      alert(`Ya existe el personaje con el id ${id}`)
      return;
    }
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({data}) => {
      if(data.name){
        setCharacters((oldChars)=> [...oldChars, data])
      }
    })
    .catch(err => alert(err.response.data.error))
  }
  
  function onClose(id){
    setCharacters(characters.filter(char => char.id !== id))
  }
  
  return (
  
    <div className="App">
        {!isHome && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path = "/" element = {<Form login={login}/>}/>
        <Route path = "/home" element = {<Cards characters={characters} onClose={onClose}/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/detail/:id" element = {<Detail/>}/>
        <Route path = "*" element = {<Error404/>}/>
        <Route path = "/favorites" element = {<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;


//   function onSearch(id) {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.json())
//     .then(( data ) => {
//        if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//           alert('¡No hay personajes con este ID!');
//        }
//     });
//  }