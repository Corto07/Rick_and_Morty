import React, { useState } from "react";
import { Link } from "react-router-dom";
import burgerMenu from "../../assets/img/burgerMenu.svg";
import imgLogo from "../../assets/img/imgLogo.png";
import imgNombre from "../../assets/img/imgNombre.png";

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-50 flex w-full h-24 bg-black">
{/* ----------------Imagen Logo-------------------------------------------------------------------------*/}
      <div className="flex md:w-[10%] inline-flex ">
        <img className="xl:w-16 xl:h-16 xl:ml-12 xl:mt-4
                        lg:w-16 lg:h-16 lg:ml-12 lg:mt-4
                        md:w-14 md:h-14 md:ml-12 md:mt-4
                        sm:w-14 sm:h-14 sm:ml-8 sm:mt-4
                        xsl:w-18 xsl:h-18 xsl:ml-8 xsl:mt-4
                        xsm:w-18 xsm:h-18 xsm:ml-6 xsm:mt-4
                        xs:w-16 xs:h-16 xs:ml-4 xs:mt-4"

        src={imgLogo} alt="Logo" />
      </div>
{/* ----------------Imagen Nombre------------------------------------------------------------------------*/}
      <div className="flex md:w-[30%] inline-flex">
        <img className="xl:w-[70%] xl:h-[80%] xl:ml-2 xl:mt-2 
                        lg:w-[70%] lg:h-[55%] lg:mt-5 lg:ml-8
                        md:w-[70%] md:h-[55%] md:mt-4 md:ml-10 
                        sm:w-[80%] sm:h-[55%] sm:mt-4 sm:ml-4
                        xsl:w-[100%] xsl:h-[65%] xsl:mt-4 xsl:ml-6
                        xsm:w-[100%] xsm:h-[65%] xsm:mt-4 xsm:ml-5
                        xs:w-[100%] xs:h-[60%] xs:mt-4 xs:ml-2" 
        src={imgNombre} alt="Logo" />
      </div>
{/* ----------------Menu Contenedor-------------------------------------------------------------------------------------------------------------------*/}
      <div className="md:w-[60%] lg:text-[16px]  inline-flex justify-end items-center relative sm:text-[12px] md:text-[14px] ">
{/* ----------------Tooggle Menu----------------------------------------------------------------------------------------------------------------------*/}
      <div className="relative z-50">
      <div className="sm:hidden">
          <button type="button" onClick={toggleMenu}>
            <img className="xs:h-6 xs:ml-3 xsm:ml-8 xsl:ml-12" src={burgerMenu} alt="Toggle Menu" />
          </button>
      </div>
      {menuOpen && ( 
        <div className="sm:hidden absolute right-0 top-8 border border-white rounded-2xl bg-white bg-opacity-80">
        <Link to="/"  className="block pt-2 pb-2 px-12 rounded-t-2xl text-black hover:text-white hover:bg-gray-800" >
          Characters
        </Link>
        <Link to="/location" className="block pt-2 pb-2 text-black hover:text-white hover:bg-gray-800" >
          Location
        </Link>
        <Link to="/episodes" className="block pt-2 pb-2 text-black hover:text-white hover:bg-gray-800" >
          Episodes
        </Link>
        <Link to="/form" className="block pt-2 pb-2 rounded-b-2xl text-black hover:text-white hover:bg-gray-800" >
          Create Character
        </Link>
      </div>
      )}
    </div>
{/* ----------------Menu Characters--------------------------------------------------------------------------------------------------------------------*/}     
        <Link to="/" className="flex m-2 px-2 text-white hidden sm:block cursor-pointer Characters-link"
          onMouseEnter={() => {document.querySelector('.Characters-link').style.background = "radial-gradient( 3rem circle at bottom, #0b5ed7, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Characters-link').style.background = "transparent"}}
        >
          Characters
        </Link>
{/* ----------------Menu Location----------------------------------------------------------------------------------------------------------------------*/}    
        <Link to="/location" className="flex m-2 px-2 text-white hidden sm:block cursor-pointer Location-link"
          onMouseEnter={() => {document.querySelector('.Location-link').style.background = "radial-gradient( 2.5rem circle at bottom, #0b5ed7, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Location-link').style.background = "transparent"}}
        >
          Location
        </Link>
{/* ----------------Menu Episodes---------------------------------------------------------------------------------------------------------------------*/} 
        <Link to="/episodes" className="flex m-2 px-2 text-white hidden sm:block cursor-pointer Episodes-link"
          onMouseEnter={() => {document.querySelector('.Episodes-link').style.background = "radial-gradient( 3rem circle at bottom, #0b5ed7, #000000)"}}
          onMouseLeave={() => {document.querySelector('.Episodes-link').style.background = "transparent"}}
        >
          Episodes
        </Link>
{/* ----------------Menu Crear Characters-------------------------------------------------------------------------------------------------------------*/}     
        <Link to="/form" className="flex m-2 px-2 mr-12 text-white hidden sm:block cursor-pointer crear-link"
          onMouseEnter={() => {document.querySelector('.crear-link').style.background = "radial-gradient( 4rem circle at bottom, #0b5ed7, #000000)"}}
          onMouseLeave={() => {document.querySelector('.crear-link').style.background = "transparent"}}
          >
          Create Character
        </Link>
{/* ----------------Menu Crear Characters-------------------------------------------------------------------------------------------------------------*/}
      </div>
    </nav>
  );
}

export default NavBar;