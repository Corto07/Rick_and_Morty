import "./App.css";
import React from 'react';
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Detail from "./Pages/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Home from "./components/Home/Home";
import FormCrear from "./Pages/FormCrear/FormCrear";
import Episodes from "./Pages/Episodes/Episodes";
import Location from "./Pages/Location/Location";

function App() {
  // Componente para manejar las rutas de detalle
  const DetailRoute = () => {
    // Obtener el parámetro id de la URL
    const { id } = useParams();
    
    // Validar si el id está en el rango válido
    const isValidId = parseInt(id) >= 1 && parseInt(id) <= 826;

    if (isValidId) {
      return <Detail />;
    } else {
      // Si el ID no es válido, redirige a la página 404
      return <Navigate to="/404" />;
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormCrear />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/:id" element={<DetailRoute />} />
        <Route path="/episodes/:id" element={<DetailRoute />} />
        <Route path="/location/:id" element={<DetailRoute />} />
      </Routes>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path = "/" element = {<Home/>}/>
//         <Route path = "/about" element = {<About/>}/>
//         <Route path = "/:id" element = {<Detail/>}/>
//         <Route path="/episodes/:id" element = {<Detail/>}/>
//         <Route path="/location/:id" element = {<Detail/>}/>  
//         <Route path = "/form" element = {<FormCrear/>}/>
//         <Route path = "/episodes" element = {<Episodes/>}/>
//         <Route path = "/location" element = {<Location/>}/>
//         <Route path = "*" element = {<Error404/>}/>
//       </Routes>
//     </div>
//   );
// }

export default App;