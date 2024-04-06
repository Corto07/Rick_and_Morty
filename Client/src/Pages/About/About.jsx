import React from "react";
import logoGithub from "../../assets/img/logoGithub.png";
import logoGmail from "../../assets/img/logoGmail.png";
import logoLinkedin from "../../assets/img/logoLinkedin.png";
import logoWhatsapp from "../../assets/img/logoWhatsapp.png";
import NavBar from "../../components/NavBar/Navbar";


const About = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[440px] relative "  
      style={   
        { 
          background:
          "linear-gradient(to right, #000000, #003400, #000000)",
          }
        }   
        > 
        <h1 className="mt-4 text-white text-xl">Esta es la app de Rick & Morty. Creada por: "Claudio"</h1>  
      
      <div className="w-full mt-12 justify-end items-center">
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
      {/* <Footer /> */}
    </>
  )
}

export default About;