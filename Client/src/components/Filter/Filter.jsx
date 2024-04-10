import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import logoClean from "../../assets/img/logoClean.png"

const Filter = ({ updatePageNumber, updateStatus, updateGender, updateSpecies,}) => {
  
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
    
  return (
    <div className="w-full justify-center items-center shadow-2xl"
    style={   
      { 
        background:
        "linear-gradient(to right, #000000, #003400, #000000)",
        }
      }   >
      
      <div className="flex w-full">
      <div className="w-full"></div>
      <div className="w-full text-center flex justify-center items-center text-white font-bold text-2xl pt-4 mb-2">Filters</div>
      
      <div className="w-full text-green-500 text-center mb-2 pt-3 flex justify-end items-center">
            <img 
            className="flex justify-center items-center w-[10%] mr-20 transition duration-500 hover:scale-110"
            src={logoClean} 
            alt="Clear Filter"
            onClick={clear}
            style={{ cursor: "pointer" }}
            title="Clear Filters"
            >
          </img>
        </div>
      </div>

      <div className="z-55 w-full">
        <div x-show="open" className="flex justify-center items-center">
          <div className="flex w-[90%] pb-6">
            <Status
              updatePageNumber={updatePageNumber}
              updateStatus={updateStatus}
            />
            <Species
              updatePageNumber={updatePageNumber}
              updateSpecies={updateSpecies}
            />
            <Gender
              updatePageNumber={updatePageNumber}
              updateGender={updateGender}
            />
          </div>
        </div>
      </div>  
          
          

    </div>
  );
};

export default Filter;