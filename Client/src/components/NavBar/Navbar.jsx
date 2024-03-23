import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/img/imgLogo.png";
import imgNombre from "../../assets/img/imgNombre.png";

const NavBar = () => {
  const [isOpenCharacters, setIsOpenCharacters] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [isOpenEpisodes, setIsOpenEpisodes] = useState(false);
  const [isOpenCrear, setIsOpenCrear] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenCharacters && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("Characters-link")) {
        setIsOpenCharacters(false);
      }
    };
      document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [isOpenCharacters]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenLocation && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("Location-link")) {
        setIsOpenLocation(false);
      }
    };
      document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [isOpenLocation]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpenEpisodes && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("Episodes-link")) {
        setIsOpenEpisodes(false);
      }
    };
      document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
  }, [isOpenEpisodes]);

  const handleOptionClick = () => {  // Cierra el menú al hacer clic en cualquier opción
    setIsOpenCharacters(false);
    setIsOpenLocation(false)
    setIsOpenEpisodes(false);
    setIsOpenCrear(false);
  };

  const handleCharactersClick = () => {
    setIsOpenCharacters(!isOpenCharacters); // Abre o cierra el menú al hacer clic en "Characters"
  };

  const handleLocationClick = () => {
    setIsOpenLocation(!isOpenLocation); // Abre o cierra el menú al hacer clic en "Location de los Characters"
  };

  const handleEpisodesClick = () => {
    setIsOpenEpisodes(!isOpenEpisodes); // Abre o cierra el menú al hacer clic en "Episodes de los Characters"
  };

  const handleCrearClick = () => {
    setIsOpenCrear(!isOpenCrear); // Abre o cierra el menú al hacer clic en "Crear Characters"
  };


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
        <div 
          className="flex m-2 px-2 text-white cursor-pointer Characters-link"
          onMouseEnter={() => {document.querySelector('.Characters-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Characters-link').style.background = "transparent"}}
          onClick={handleCharactersClick}>
          Characters
        </div>

{/* ----------------Menu Location---------------------------------------------------------------------*/}    
        <div className="flex m-2 px-2 text-white cursor-pointer Location-link"
          onMouseEnter={() => {document.querySelector('.Location-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Location-link').style.background = "transparent"}}
          onClick={handleLocationClick}>
          Location
          </div>
{/* ----------------Menu Episodes---------------------------------------------------------------------*/} 
        <div className="flex m-2 px-2 text-white cursor-pointer Episodes-link"
          onMouseEnter={() => {document.querySelector('.Episodes-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Episodes-link').style.background = "transparent"}}
          onClick={handleEpisodesClick}>
          Episodes
          </div>
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