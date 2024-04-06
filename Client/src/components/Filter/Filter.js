import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({ updatePageNumber, updateStatus, updateGender, updateSpecies,}) => {
  
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
    
  return (
    <div className="w-full justify-center items-center bg-gray-400">
      <div className="text-center text-white font-bold text-lg pt-2 mb-2">Filters</div>
        <div
          style={{ cursor: "pointer" }}
          onClick={clear}
          className="text-blue-500 underline text-center mb-5"
          >
          Clear Filters
        </div>
      
      <div x-show="open" class="w-full p-4 bg-white">
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
  );
};

export default Filter;