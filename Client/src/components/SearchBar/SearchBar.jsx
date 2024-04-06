import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="flex relative justify-center items-center " 
      style={   
        { 
          background:
            "radial-gradient( 30rem circle at bottom, #505050, #000000",
          }
        } 
      >
      <input className="text-white block w-72 text-center rounded  bg-transparent px-3 outline-none"
        type="text"
        name="name" 
        id="name"
        placeholder="Search for Characters..." 
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        required/>
      
           
      <button 
      className="m-2 relative flex text-white"
      type="button"
      id="button-addon4"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      onClick={searchBtn}>
        <span className="[&>svg]:h-5 [&>svg]:w-5 bg-transparent hover:text-black transition-transform hover:scale-125 duration-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </span>
      </button>
   
    </div>
  );
}

export default Search;