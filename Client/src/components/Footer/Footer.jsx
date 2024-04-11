import React from "react";
import logoGithub from "../../assets/img/logoGithub.png";
import logoGmail from "../../assets/img/logoGmail.png";
import logoLinkedin from "../../assets/img/logoLinkedin.png";
import logoWhatsapp from "../../assets/img/logoWhatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full "
    style={   
      { 
        background:
        "linear-gradient(to right, #000000, gray, #000000)",
        }
      }   >
      
      <div className="w-full md:h-20 xs:h-24 md:text-lg xs:text-ms md:flex md:flex-wrap md:justify-center
      xs:flex xs:flex-wrap xs:justify-center ">
       
        <div className="flex md:p-3 md:mt-0 md:w-1/2 md:justify-start md:items-center md:text-lg md:text-left 
                        xs:w-full xs:justify-center xs:items-center xs:mt-2 ">
          <Link to="/about">
            <h1 className="flex md:ml-14 xs:text-black md:text-gray-500 hover:text-blue-500 hover:underline">About Developer</h1>        
          </Link>
        </div>
      
        <div className="md:w-1/2 md:flex md:justify-end md:items-center
                        xs:w-full xs:flex xs:justify-center xs:items-center">
          <a href="https://www.github.com/corto07" target="_blank" rel="noreferrer">
            <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoGithub} alt="GitHub" />
          </a>
          <a href="https://mailto:claudiocarruz@gmail.com" target="_blank" rel="noreferrer">
            <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoGmail} alt="Gmail" />
          </a>
            <a href="https://www.linkedin.com/in/claudio-carruz-24961256/" target="_blank" rel="noreferrer">
          <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoLinkedin} alt="Linkedin" />
          </a>
            <a href="https://wa.me/+5492915032061" target="_blank" rel="noreferrer">
          <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110 md:mr-14" src={logoWhatsapp} alt="Whatsapp" />
          </a>
        </div>
      
      </div>
      
        <div className="w-full p-3 bg-black lg:text-[14px] xs:text-xs">
          <p className="items-center text-white">&copy; 2024 Rick and Morty | Copyright</p>
        </div>

    </div> 
  )
}

export default Footer;