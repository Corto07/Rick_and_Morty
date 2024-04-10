import React from "react";
import logoGithub from "../../assets/img/logoGithub.png";
import logoGmail from "../../assets/img/logoGmail.png";
import logoLinkedin from "../../assets/img/logoLinkedin.png";
import logoWhatsapp from "../../assets/img/logoWhatsapp.png";
import NavBar from "../../components/NavBar/Navbar";
import imgDev from "../../assets/img/imgDev.jpg"


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
        <h2 className="mt-6 mb-8 text-3xl text-white ">
        Claudio Carruz <span className="text-[#0b5ed7] font-bold">⚛</span>
      </h2>
      
      <div className="mb-12 lg:mb-0"> {/* -- Contenedor individual de cada desarrollador -- */}
          
          <img className="mx-auto mb-4 rounded-lg shadow-md shadow-gray-500 w-[150px] h-[150px]" 
            src={imgDev} alt="Fullstack Developer"
          />
          <h5 className="mb-2 text-lg text-white font-bold">
            Fullstack Web <span className="text-[#0b5ed7] font-bold">Developer</span>
            </h5>
          <p className="mb-5 text-white">Oriented towards Frontend design and visual material.</p>
          
            <ul className="mx-auto flex list-inside justify-center">
              {/* <-- GitHub --> */}
                <a href="https://www.github.com/corto07" target="_blank" rel="noreferrer">
                  <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoGithub} alt="GitHub" />
                </a>
              {/* <-- Mail --> */}
                <a href="https://mailto:claudiocarruz@gmail.com" target="_blank" rel="noreferrer">
                  <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoGmail} alt="Gmail" />
                </a>
              {/* <-- Linkedin --> */}
                <a href="https://www.linkedin.com/in/claudio-carruz-24961256/" target="_blank" rel="noreferrer">
                  <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110" src={logoLinkedin} alt="Linkedin" />
                </a>
              {/* <-- Whatsapp --> */}
                <a href="https://wa.me/+5492915032061" target="_blank" rel="noreferrer">
                  <img className="flex w-16 h-16 p-2 rounded-t-xl transition duration-500 hover:scale-110 mr-5" src={logoWhatsapp} alt="Whatsapp" />
                </a>
            </ul>
        </div>     
      </div>  

    </>
  )
}

export default About;