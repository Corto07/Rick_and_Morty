import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/Navbar";
import InputGroup from "../../components/Filter/Category/InputGroup";
import sendUp from "../../assets/img/sendUp.png"

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Cambia 100 parar desplazarse antes de mostrar el botón
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
    <div className="w-full"
      style={   
        { 
          background:
          "linear-gradient(to right, #000000, #003400, #000000)",
          }
        }   
        > 
      <NavBar />
      
      <div className="mb-3">
        <h1 className="text-center text-white font-bold text-2xl mt-4 mb-2">
          Location :
          <span className="text-blue-500">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        
        <div className="sm:flex justify-center items-center mb-8 ">
          <h5 className="sm:flex-col text-center text-xl text-white">Dimension : {" "}
            <span className="text-gray-400 text-xl">{dimension === "" ? "Unknown" : dimension}</span>
          </h5>
          <h6 className="sm:ml-6 text-center text-xl text-white">Type : {" "} 
            <span className="text-gray-400 text-xl">{type === "" ? "Unknown" : type}</span>
          </h6>
        </div>

      </div>
      
      <div className="">
        <div className="w-full flex justify-center items-center">
          <h4 className="text-center mb-3 text-white text-lg flex-col">Pick Location</h4>
          <div className="ml-4">
            <InputGroup name="Location" changeID={setNumber} total={126} />
          </div>
        </div>

        <div>
          {showButton && (
            <button
              onClick={scrollToTop}
              id='irArriba'>
                <img className="z-50 w-32 h-auto fixed bottom-8 xs:right-2 md:right-5 flex xs:p-5 md:p-5 transition duration-500 hover:scale-110 cursor-pointer inline-block "
                  src={sendUp}
                  alt="Send Up"
                  title="Click to Up"
                /> 
            </button>
          )}
        </div>

        <div className="w-[90%] inline-flex flex flex-col pt-2">
          <div className="">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
