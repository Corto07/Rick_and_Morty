import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import sendUp from "../../assets/img/sendUp.png"

const Home = () => {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 250) { // Cambia 100 parar desplazarse antes de mostrar el botón
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full" >
      <NavBar/>
        <div>
          {showButton && (
            <button
              onClick={scrollToTop}
              id='irArriba'>
                <img className="z-50 w-32 h-auto fixed bottom-24 right-6 flex xs:p-5 md:p-5 transition duration-500 hover:scale-110 cursor-pointer inline-block "
                  src={sendUp}
                  alt="Send Up"
                  title="Click to Up"
                /> 
            </button>
          )}
        </div>
      <Header/>
      <Footer/>
    </div>
  )
};

export default Home;