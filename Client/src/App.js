import "./App.css";
import React from 'react';
// import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";

function App() {  
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const [ characters, setCharacters ] = useState([])
  // const [access, setAccess] = useState (false)
  
  // const URL = 'http://localhost:3001/rickandmorty/'

  // async function login ({ email, password }){
  //   try {
  //       const {data} = await axios(`${URL}login?email=${email}&password=${password}`)
  //       console.log({data})
  //       const { access } = data;
  //       setAccess(access);
  //       access && navigate('/home');
  //   } catch ({ response }) {
  //       const { data } = response
  //       console.log(data);
  //       alert(data.message)
  //   }
  // }

  // useEffect(() => {
  //     !access && navigate('/');
  //  }, [access]);

  //  const onSearch = async (id) => {
  //   if(!id) alert('Ingresa un ID')
  //   if(characters.find(char => char.id === parseInt(id) )){
  //     alert(`Ya existe el personaje con el id ${id}`)
  //     return;
  //   }
  //   try {
  //   const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
  //     setCharacters((oldChars)=> [...oldChars, data])
  //   } catch(error){
  //     alert(error.response.data)
  //   }
  // }
  
  // function onClose(id){
  //   setCharacters(characters.filter(char => char.id !== id))
  // }
  
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Home />}/>
        {/* <Route path = "/home" element = {<Slider />}/>
        <Route path = "/cards" element={<Cards />}/> */}
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/detail/:id" element = {<Detail/>}/>
        <Route path = "*" element = {<Error404/>}/>
        <Route path = "/favorites" element = {<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;

//  **** Peticion Tipo Fetch ****

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


// **** Version Promises ****

// const onSearch = (id) => {
//   if(!id) alert('Ingresa un ID')
//   if(characters.find(char => char.id === parseInt(id) )){
//     alert(`Ya existe el personaje con el id ${id}`)
//     return;
//   }
//   // axios(`https://rickandmortyapi.com/api/character/${id}`)
//   axios(`http://localhost:3001/rickandmorty/character/${id}`)
//   .then(({data}) => {
//     if(data.name){
//       setCharacters((oldChars)=> [...oldChars, data])
//     }
//   })
//   .catch(err => alert(err.response.data.error))
// }

// **** Version Promises ****

// function login({ email, password }){
//   axios(`${URL}login?email=${email}&password=${password}`)
//   .then(({data})=>{
//     const { access } = data;
//     setAccess(access)
//     access && navigate('/home')
//   })
// }