import React from "react";
import imagen from "../../assets/img/SitioEnConstruccion.jpg"
import { Link } from "react-router-dom";

const FormCrear = () => {

    return (
        <div className="justify-center items-center">
        <h1 className="uppercase p-2">Estamos en el Formulario de creación de personajes</h1>
        <Link to="/">
            <h1 className="mb-4">Volver al Home</h1>
        </Link>
        <img className="block mx-auto w-[50%]" src={imagen} alt="Sitio en construcción" />
    </div>
    )
}

export default FormCrear;
