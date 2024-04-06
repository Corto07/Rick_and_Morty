import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/img/imgLogo.png";
import imgNombre from "../../assets/img/imgNombre.png";

const NavBar = () => {
  return (
    <nav className="z-50 flex w-full h-24 bg-black">
{/* ----------------Imagen Logo-------------------------------------------------------------------------*/}
      <div className="flex w-[10%] inline-flex ">
        <img className="w-16 h-16 ml-12 mt-4" src={imgLogo} alt="Logo" />
      </div>
{/* ----------------Imagen Nombre------------------------------------------------------------------------*/}
      <div className="flex w-[30%] inline-flex ">
        <img className="w-[70%] h-[80%] ml-2 mt-2" src={imgNombre} alt="Logo" />
      </div>
{/* ----------------Menu Contenedor---------------------------------------------------------------------*/}
      <div className="w-[60%] text-[16px] inline-flex justify-end items-center relative ">
{/* ----------------Menu Characters---------------------------------------------------------------------*/}     
        <Link to="/" className="flex m-2 px-2 text-white cursor-pointer Characters-link"
          onMouseEnter={() => {document.querySelector('.Characters-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Characters-link').style.background = "transparent"}}
        >
          Characters
        </Link>
{/* ----------------Menu Location---------------------------------------------------------------------*/}    
        <Link to="/location" className="flex m-2 px-2 text-white cursor-pointer Location-link"
          onMouseEnter={() => {document.querySelector('.Location-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Location-link').style.background = "transparent"}}
        >
          Location
        </Link>
{/* ----------------Menu Episodes---------------------------------------------------------------------*/} 
        <Link to="/episodes" className="flex m-2 px-2 text-white cursor-pointer Episodes-link"
          onMouseEnter={() => {document.querySelector('.Episodes-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Episodes-link').style.background = "transparent"}}
        >
          Episodes
        </Link>
{/* ----------------Menu Crear Characters---------------------------------------------------------------------*/}     
        <Link to="/form" className="flex m-2 px-2 mr-12 text-white cursor-pointer crear-link"
          onMouseEnter={() => {document.querySelector('.crear-link').style.background = "radial-gradient( 4rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.crear-link').style.background = "transparent"}}
          >
          Create Character
        </Link>
{/* ----------------Menu Crear Characters---------------------------------------------------------------------*/}
      </div>
    </nav>
  );
}

export default NavBar;