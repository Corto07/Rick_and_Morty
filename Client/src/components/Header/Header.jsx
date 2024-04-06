import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Search from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter"

const Header = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [search, setSearch] = useState("");
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    
    <div className="w-full h-auto relative "  
      style={   
        { 
          background:
          "linear-gradient(to right, #000000, #003400, #000000)",
          }
        }   
        > 
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber}  />
      
      <div className="flex flex-wrap w-[20%] inline-flex">
        <Filter
          pageNumber={pageNumber}
          status={status}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          updatePageNumber={updatePageNumber}
        />
      </div>
      
      <div className="w-[80%] inline-flex flex flex-col ">
        <h1 className="text-4xl text-white text-center font-bold mt-6 mb-5">Characters</h1>
        
        <div className="w-full mt-2 mb-2">
          <Pagination
            info={info}
            pageNumber={pageNumber}
            updatePageNumber={updatePageNumber}
          />
        </div>

        <div className="mb-2">
          <div className=" m-4 ">
            <Card page="/" results={results} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;