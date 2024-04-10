import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/Navbar";
import InputGroup from "../../components/Filter/Category/InputGroup";

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
        
        <div class="flex justify-center items-center mb-8 ">
          <h5 class="flex-col text-center text-xl text-white">Dimension : {" "}
            <span className="text-gray-400 text-xl">{dimension === "" ? "Unknown" : dimension}</span>
          </h5>
          <h6 class="ml-6 text-center text-xl text-white">Type : {" "} 
            <span className="text-gray-400 text-xl">{type === "" ? "Unknown" : type}</span>
          </h6>
        </div>

      </div>
      
      <div className="">
        <div className="w-full flex justify-center items-center">
          <h4 className="text-center mb-3 text-white text-lg flex-col">Pick Location</h4>
          <div class="ml-4">
            <InputGroup name="Location" changeID={setNumber} total={126} />
          </div>
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
