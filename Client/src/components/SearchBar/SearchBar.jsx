import React from "react";

const Search = ({ setSearch, updatePageNumber }) => {
  
  const clearInput = () => {
    const input = document.getElementById('name');
    input.value = ''; // Limpiar el valor del input
    updatePageNumber(1);
    setSearch(''); // Limpiar la búsqueda
  };

  return (
    <div className="flex relative justify-center items-center shadow-xl" 
      style={   
        { 
          background:
            "radial-gradient( 30rem circle at bottom, #505050, #000000",
          }
        } 
      >
      <input className="text-white block w-72 text-center rounded bg-transparent px-3 outline-none"
        type="text"
        name="name" 
        id="name" 
        placeholder="Search for Characters..." 
        onChange={(e) => {
          updatePageNumber(1);
        }}
        required/>
      
      <button 
      className="h-5 w-5 text-white bg-transparent hover:text-[red] transition-transform hover:scale-125 duration-500 cursor-pointer"
      onClick={clearInput}
      title="Clear search" 
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor">
          <path strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>     
      
      <div className="border-r border-gray-300 h-6 ml-3 mx-2"></div> {/* Barra divisoria */}

      <button 
      className="m-2 relative flex text-white"
      type="button"
      id="button-addon4"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      title="Search"
      onClick={(e) => {
        e.preventDefault();
        updatePageNumber(1);
        const searchTerm = document.getElementById('name').value;
        setSearch(searchTerm);
      }}>
        <span className="[&>svg]:h-5 [&>svg]:w-5 bg-transparent hover:text-[#0b5ed7] transition-transform hover:scale-125 duration-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </span>
      </button>
   
    </div>
  );
}

export default Search;