import React, { useState } from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import logoClean from "../../assets/img/logoClean.png"

const Filter = ({ updatePageNumber, updateStatus, updateGender, updateSpecies,}) => {
  
  const [filtersSelected, setFiltersSelected] = useState(false);

  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
    setFiltersSelected(false);
  };

  const handleFilterSelection = () => {
    setFiltersSelected(true);
  };
    
  return (
    <div className="w-full justify-center items-center shadow-2xl"
      style={   
        { 
        background:
        "linear-gradient(to right, #000000, #003400, #000000)",
        }
      }   
      >
      <div className="flex w-full">
        <div className="w-full mt-2"></div>
          <div className="w-full text-center flex justify-center items-center text-white font-bold text-2xl pt-4 mb-4">Filters</div>
            <div className="w-full mb-2 flex justify-end items-center">
              {filtersSelected && (  
                <img 
                  className="w-[10%] mr-20 transition duration-500 hover:scale-110"
                  src={logoClean} 
                  alt="Clear Filter"
                  onClick={clear}
                  style={{ cursor: "pointer" }}
                  title="Clear Filters"
                />
              )}
            </div>
          </div>
          <div className="z-55 w-full">
            <div x-show="open" className="flex justify-center items-center">
              <div className="flex w-[90%] pb-6">
                <Status
                  updatePageNumber={updatePageNumber}
                  updateStatus={(status) => {
                  updateStatus(status);
                  handleFilterSelection();
                  }}
                />
                <Species
                  updatePageNumber={updatePageNumber}
                  updateSpecies={(species) => {
                  updateSpecies(species);
                  handleFilterSelection();
                  }}
                />
                <Gender
                  updatePageNumber={updatePageNumber}
                  updateGender={(gender) => {
                  updateGender(gender);
                  handleFilterSelection();
                  }}
                />
              </div>
            </div>
          </div>  
    </div>
  );
};

export default Filter;