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
        <Route path="/episodes/:id" element={<Detail />}/>
        <Route path="/location/:id" element={<Detail />}/>  
        <Route path = "*" element = {<Error404/>}/>
        <Route path = "/form" element = {<FormCrear/>}/>
        <Route path = "/episodes" element = {<Episodes/>}/>
        <Route path = "/location" element = {<Location/>}/>

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