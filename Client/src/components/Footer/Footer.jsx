import React from "react";
import logoGithub from "../../assets/img/logoGithub.png";
import logoGmail from "../../assets/img/logoGmail.png";
import logoLinkedin from "../../assets/img/logoLinkedin.png";
import logoWhatsapp from "../../assets/img/logoWhatsapp.png";

const Footer = () => {
  return (
    <div className="w-full "
    style={   
      { 
        background:
        "linear-gradient(to right, #000000, gray, #000000)",
        }
      }   >
      
      <div className="w-full h-20 lg:text-lg xs:text-ms flex flex-wrap justify-center ">
       
        <div className="p-3 w-1/2  lg:text-lg xs:text-ms text-left ">
          <h1 className="ml-14 text-gray-500 ">Realizado por Claudio Carruz</h1>
          <h1 className="ml-14 text-gray-500">(8000) Bahía Blanca - Argentina</h1>
            
        </div>
      
        <div className="w-1/2 flex justify-end items-center">
          <a href="https://www.github.com/corto07" target="_blank" rel="noreferrer">
            <img className="flex w-16 h-16 p-2 rounded-t-xl shadow transition duration-500 hover:scale-110" src={logoGithub} alt="GitHub" />
          </a>
          <a href="https://mailto:claudiocarruz@gmail.com" target="_blank" rel="noreferrer">
            <img className="flex w-16 h-16 p-2 rounded-t-xl shadow transition duration-500 hover:scale-110" src={logoGmail} alt="Gmail" />
          </a>
            <a href="https://www.linkedin.com/in/claudio-carruz-24961256/" target="_blank" rel="noreferrer">
          <img className="flex w-16 h-16 p-2 rounded-t-xl shadow transition duration-500 hover:scale-110" src={logoLinkedin} alt="Linkedin" />
          </a>
            <a href="https://wa.me/+5492915032061" target="_blank" rel="noreferrer">
          <img className="flex w-16 h-16 p-2 rounded-t-xl shadow transition duration-500 hover:scale-110 mr-5" src={logoWhatsapp} alt="Whatsapp" />
          </a>
        </div>
      
      </div>
      
        <div className="w-full p-3 bg-black lg:text-[14px] xs:text-xs">
          <p className="items-center text-white">&copy; 2024 Rick and Morty | Todos los derechos reservados</p>
        </div>

    </div> 
  )
}

export default Footer;