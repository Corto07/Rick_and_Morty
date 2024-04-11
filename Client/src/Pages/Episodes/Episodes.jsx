import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import InputGroup from "../../components/Filter/Category/InputGroup";
import NavBar from "../../components/NavBar/Navbar";
import sendUp from "../../assets/img/sendUp.png"

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode name :{" "}
          <span className="text-orange-500">{name === "" ? "Unknown" : name}</span>
        </h1>

        <h5 className="mb-8 text-center text-xl text-white">
          Air Date : <span className="text-gray-400 text-xl">{air_date === "" ? "Unknown" : air_date}</span>
        </h5>

      </div>

      <div className="">
        
      <div className="w-full flex justify-center items-center">
          <h4 className="text-center mb-3 text-white text-lg flex-col">Pick Episode:</h4>
            <div className="ml-4">
                <InputGroup name="Episode" changeID={setID} total={51} />
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
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Episodes;
