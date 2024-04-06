import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";

const Detail = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <>
    <NavBar />
    <div className="w-full h-auto flex justify-center"
    style={   
      { 
        background:
        "linear-gradient(to right, #000000, #003400, #000000)",
        }
      }   
    >

      <div className="flex flex-col gap-2">
        <h1 className="mt-4 text-center text-white text-2xl font-bold">{name}</h1>

        <img className="w-full h-auto rounded" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="inline-block px-2 py-1 text-white bg-[red] text-lg rounded">{status}</div>;
          } else if (status === "Alive") {
            return <div className="inline-block px-2 py-1 text-white bg-[green] text-lg rounded">{status}</div>;
          } else {
            return <div className="inline-block px-2 py-1 text-black bg-gray-400 text-lg rounded">{status}</div>;
          }
        })()}
        
        <div className="p-4 mb-4 bg-white border rounded shadow-md">
          <div className="">
            <span className="font-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="font-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="font-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="font-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Detail; 