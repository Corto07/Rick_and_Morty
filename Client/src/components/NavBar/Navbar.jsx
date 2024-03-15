import React, { useState, useRef, useEffect } from "react";
import imgLogo from "../../assets/img/imgLogo.png";
import imgNombre from "../../assets/img/imgNombre.png";

const NavBar = () => {
  const [isOpenPersonajes, setIsOpenPersonajes] = useState(false);
  const [isOpenOrden, setIsOpenOrden] = useState(false);
  const [isOpenGenero, setIsOpenGenero] = useState(false);
  const [isOpenEspecies, setIsOpenEspecies] = useState(false);
  const [isOpenUbicacion, setIsOpenUbicacion] = useState(false);
  const [isOpenUbicacionPag1, setIsOpenUbicacionPag1] = useState(false);
  const [isOpenUbicacionPag2, setIsOpenUbicacionPag2] = useState(false);
  const [isOpenUbicacionPag3, setIsOpenUbicacionPag3] = useState(false);
  const [isOpenUbicacionPag4, setIsOpenUbicacionPag4] = useState(false);
  const [isOpenUbicacionPag5, setIsOpenUbicacionPag5] = useState(false);
  const [isOpenUbicacionPag6, setIsOpenUbicacionPag6] = useState(false);
  const [isOpenUbicacionPag7, setIsOpenUbicacionPag7] = useState(false);
  const [isOpenEpisodios, setIsOpenEpisodios] = useState(false);
  const [isOpenCrear, setIsOpenCrear] = useState(false);
  const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpenPersonajes && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("personajes-link")) {
  //       setIsOpenPersonajes(false);
  //     }
  //   };
  //     document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  // }, [isOpenPersonajes]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpenOrden && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("ordenar-link")) {
  //       setIsOpenOrden(false);
  //     }
  //   };
  //     document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  // }, [isOpenOrden]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpenGenero && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("genero-link")) {
  //       setIsOpenGenero(false);
  //     }
  //   };
  //     document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  // }, [isOpenGenero]);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isOpenEspecies && menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("especies-link")) {
  //       setIsOpenEspecies(false);
  //     }
  //   };
  //     document.addEventListener("mousedown", handleClickOutside);
  //       return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //       };
  // }, [isOpenEspecies]);

  const handleOptionClick = () => {  // Cierra el menú al hacer clic en cualquier opción
    setIsOpenPersonajes(false);
    setIsOpenOrden(false);
    setIsOpenGenero(false);
    setIsOpenEspecies(false);
    setIsOpenUbicacion(false);
    setIsOpenUbicacionPag1(false)
    setIsOpenUbicacionPag2(false)
    setIsOpenUbicacionPag3(false)
    setIsOpenUbicacionPag4(false)
    setIsOpenUbicacionPag5(false)
    setIsOpenUbicacionPag6(false)
    setIsOpenUbicacionPag7(false)
    setIsOpenEpisodios(false);
    setIsOpenCrear(false);
  };

  const handlePersonajesClick = () => {
    setIsOpenPersonajes(!isOpenPersonajes); // Abre o cierra el menú al hacer clic en "Personajes"
  };

  const handleOrdenarClick = () => {
    setIsOpenOrden(!isOpenOrden); // Abre o cierra el menú al hacer clic en "Ordenar los Personajes"
  };

  const handleGeneroClick = () => {
    setIsOpenGenero(!isOpenGenero); // Abre o cierra el menú al hacer clic en "Genero de los Personajes"
  };

  const handleEspeciesClick = () => {
    setIsOpenEspecies(!isOpenEspecies); // Abre o cierra el menú al hacer clic en "Especies de los Personajes"
  };

  const handleUbicacionClick = () => {
    setIsOpenUbicacion(!isOpenUbicacion); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };
  
  const handleUbicacionPag1Click = () => {
    setIsOpenUbicacionPag1(!isOpenUbicacionPag1); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };
  
  const handleUbicacionPag2Click = () => {
    setIsOpenUbicacionPag2(!isOpenUbicacionPag2); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };
  
  const handleUbicacionPag3Click = () => {
    setIsOpenUbicacionPag3(!isOpenUbicacionPag3); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };

  const handleUbicacionPag4Click = () => {
    setIsOpenUbicacionPag4(!isOpenUbicacionPag4); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };

  const handleUbicacionPag5Click = () => {
    setIsOpenUbicacionPag5(!isOpenUbicacionPag5); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };

  const handleUbicacionPag6Click = () => {
    setIsOpenUbicacionPag6(!isOpenUbicacionPag6); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };

  const handleUbicacionPag7Click = () => {
    setIsOpenUbicacionPag7(!isOpenUbicacionPag7); // Abre o cierra el menú al hacer clic en "Ubicacion de los Personajes"
  };

  const handleEpisodiosClick = () => {
    setIsOpenEpisodios(!isOpenEpisodios); // Abre o cierra el menú al hacer clic en "Episodios de los Personajes"
  };
  
  const handleCrearClick = () => {
    setIsOpenCrear(!isOpenCrear); // Abre o cierra el menú al hacer clic en "Crear Personajes"
  };


  return (
    <nav className="z-50 flex w-full h-20 bg-black">
{/* ----------------Imagen Logo-------------------------------------------------------------------------*/}
      <div className="flex w-[10%] inline-flex">
        <img className="w-14 h-14 ml-12 mt-3" src={imgLogo} alt="Logo" />
      </div>
{/* ----------------Imagen Nombre------------------------------------------------------------------------*/}
      <div className="flex w-[30%] inline-flex">
        <img className="w-[70%] h-[80%] ml-2 mt-2" src={imgNombre} alt="Logo" />
      </div>
{/* ----------------Menu Contenedor---------------------------------------------------------------------*/}
      <div className="w-[60%] text-[16px] inline-flex justify-center items-center relative">
{/* ----------------Menu Personajes---------------------------------------------------------------------*/}    
        <div 
          className="flex m-2 px-2 text-white cursor-pointer personajes-link"
          onMouseEnter={() => {document.querySelector('.personajes-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.personajes-link').style.background = "transparent"}}
          onClick={handlePersonajesClick}>
          Personajes
        </div>
          {isOpenPersonajes && (
            <div ref={menuRef} className="text-[14px] absolute left-0 ml-[4.5%] z-10 bg-white mt-[14%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Todos los Personajes
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Personajes creados
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Favoritos
              </div>
            </div>
          )}
{/* ----------------Menu Ordenar------------------------------------------------------------------*/}
        <div className="flex m-2 px-2 text-white cursor-pointer ordenar-link"
          onMouseEnter={() => {document.querySelector('.ordenar-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.ordenar-link').style.background = "transparent"}}
          onClick={handleOrdenarClick}>
          Ordenar
        </div>
          {isOpenOrden && (
            <div ref={menuRef} className="text-[14px] absolute left-0 ml-[18.5%] z-10 bg-white mt-[10.3%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Ascendente (A-Z)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Descendente (Z-A)
              </div>
            </div>
          )}
{/* ----------------Menu Genero---------------------------------------------------------------------*/}    
        <div className="flex m-2 px-2 text-white cursor-pointer genero-link"
          onMouseEnter={() => {document.querySelector('.genero-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.genero-link').style.background = "transparent"}}
          Genero
          onClick={handleGeneroClick}>
          Genero
        </div>
        {isOpenGenero && (
            <div ref={menuRef} className="text-[14px] absolute left-0 ml-[29.5%] z-10 bg-white mt-[17.5%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Masculino
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Femenino
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Sin Genero
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Desconocido
              </div>
            </div>
          )}
{/* ----------------Menu Especies---------------------------------------------------------------------*/}     
        <div className="flex m-2 px-2 text-white cursor-pointer especies-link"
          onMouseEnter={() => {document.querySelector('.especies-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.especies-link').style.background = "transparent"}}
          onClick={handleEspeciesClick}>
          Especies
        </div>
        {isOpenEspecies && (
            <div ref={menuRef} className="text-[14px] absolute left-0 ml-[40.2%] z-10 bg-white mt-[38.9%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Humanos
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Aliens
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Humanoides
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Desconocidos
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Poopybutthole
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Criaturas Místicas
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Animales
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Robots
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Cronenberg
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                Enfermedad
              </div>
            </div>
          )}
{/* ----------------Menu Ubicacion---------------------------------------------------------------------*/}    
        <div className="flex m-2 px-2 text-white cursor-pointer ubicacion-link"
          onMouseEnter={() => {document.querySelector('.ubicacion-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.ubicacion-link').style.background = "transparent"}}
          onClick={handleUbicacionClick}>
          Ubicación
        </div>
        {isOpenUbicacion && (
            <div ref={menuRef} className="text-[14px] absolute left-0 ml-[52%] z-10 bg-white mt-[28%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag1Click}>
                Ubicación 001-020
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag2Click}>
                Ubicación 021-040
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag3Click}>
                Ubicación 041-060
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag4Click}>
                Ubicación 061-080
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag5Click}>
                Ubicación 081-100
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag6Click}>
                Ubicación 101-120
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleUbicacionPag7Click}>
                Ubicación 121-126
              </div>
            </div>
          )}
           {isOpenUbicacionPag1 && (
            <div ref={menuRef} className="text-[12px] absolute left-0 ml-[69.4%] z-10 bg-white mt-[67.5%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                01. Earth (C-137)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                02. Abadango
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                03. Citadel of Ricks
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                04. Worldender's lair
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                05. Anatomy Park
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                06. Interdimensional Cable
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                07. Immortality Field Resort
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                08. Post-Apocalyptic Earth
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                09. Purge Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                10. Venzenulon 7
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                11. Bepis 9
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                12. Cronenberg Earth
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                13. Nuptia 4
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                14. Giant's Town
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                15. Bird World
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                16. St. Gloopy Noops Hospital
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                17. Earth (5-126)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                18. Mr. Goldenfold's dream
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                19. Gromflom Prime
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                20. Earth (Replacement Dimension)
              </div>
            </div>
          )}
          {isOpenUbicacionPag2 && (
            <div ref={menuRef} className="text-[12px] absolute left-0 ml-[69.4%] z-10 bg-white mt-[67.5%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                21. Testicle Monster Dimension
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                22. Signus 5 Expanse
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                23. Earth (C-500A)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                24. Rick's Battery Microverse
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                25. The Menagerie
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                26. Earth (K-83)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                27. Hideout Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                28. Unity's Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                29. Dorian 5
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                30. Earth (Unknown dimension)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                31. Earth (J19ζ7)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                32. Roy: A Life Well Lived
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                33. Eric Stoltz Mask Earth
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                34. Earth (Evil Rick's Target Dimension)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                35. Planet Squanch
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                36. Glaagablaaga
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                37. Resort Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                38. Interdimensional Customs
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                39. Galactic Federation Prison
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                40. Gazorpazorp
              </div>
            </div>
          )}
          {isOpenUbicacionPag3 && (
            <div ref={menuRef} className="text-[12px] absolute left-0 ml-[69.4%] z-10 bg-white mt-[67.5%] rounded shadow-lg">
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                41. Hamster in Butt World
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                42. Earth (Giant Telepathic Spiders Dimension)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                43. Alphabetrium
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                44. Jerryboree
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                45. Krootabulon
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                46. Zigerion's Base
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                47. Pluto
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                48. Fantasy World
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                49. Zeep Xanflorp's Miniverse
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                50. Kyle's Teenyverse
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                51. Larva Alien's Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                52. Earth (K-22)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                53. Mr. Meeseeks Box
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                54. Vindicator's Base
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                55. Pawn Shop Planet
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                56. Mega Gargantuan Kingdom
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                57. Gear World
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                58. Earth (D-99)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                59. Earth (D716)
              </div>
              <div className="text-left text-white bg-black hover:text-green-700 hover:bg-gradient-to-br from-black to-gray-800 cursor-pointer py-1 px-3"
                onClick={handleOptionClick}>
                60. Earth (D716-B)
              </div>
            </div>
          )}
{/* ----------------Menu Episodios---------------------------------------------------------------------*/} 
        <div className="flex m-2 px-2 text-white cursor-pointer episodios-link"
          onMouseEnter={() => {document.querySelector('.episodios-link').style.background = "radial-gradient( 3rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.episodios-link').style.background = "transparent"}}
          onClick={handleEpisodiosClick}>
          Episodios
        </div>
{/* ----------------Menu Crear Personajes---------------------------------------------------------------------*/}     
        <div className="flex m-2 px-2 text-white cursor-pointer crear-link"
          onMouseEnter={() => {document.querySelector('.crear-link').style.background = "radial-gradient( 4rem circle at bottom, #005000, #000000)"}}
          onMouseLeave={() => {document.querySelector('.crear-link').style.background = "transparent"}}
          onClick={handleCrearClick}>
          Crear Personajes
        </div>
{/* ----------------Menu Crear Personajes---------------------------------------------------------------------*/}
      </div>
    </nav>
  );
}

export default NavBar;