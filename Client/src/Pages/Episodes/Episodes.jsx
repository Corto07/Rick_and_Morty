import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import InputGroup from "../../components/Filter/category/InputGroup";
import NavBar from "../../components/NavBar/Navbar";

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

  return (
    <div className="container"
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
        
      <div class="w-full flex justify-center items-center">
          <h4 class="text-center mb-3 text-white text-lg flex-col">Pick Episode:</h4>
            <div class="ml-4">
                <InputGroup name="Episode" changeID={setID} total={51} />
            </div>
      </div>
        
        <div className="w-full">
          <div className="">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Episodes;
