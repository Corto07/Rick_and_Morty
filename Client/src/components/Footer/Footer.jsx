import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 ">
      
      <div className="p-3 w-full lg:text-lg xs:text-ms flex flex-wrap justify-center">
        <span className="text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#">Home</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#costosLink">Costos de Servicios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#testimonioLink">Testimonios</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#contactoLink">Contacto</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#nosotrosLink">Nosotros</a>
        <span className="ml-3 text-gray-500">|</span>
      </div>

      <div className="w-full p-3 bg-black lg:text-[14px] xs:text-xs">
        <p className="items-center text-white">&copy; 2024 Rick and Morty | Todos los derechos reservados</p>
      </div>

    </div> 
  )
}

export default Footer;