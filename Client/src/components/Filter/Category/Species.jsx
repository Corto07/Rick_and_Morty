import React from "react";
import FilterBTN from "../FilterBoton";
import { Collapse, initTWE, } from "tw-elements";

const Species = ({ updateSpecies, updatePageNumber }) => {
  
  initTWE({ Collapse });

  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];

  return (
    <div id="accordion" className="w-[90%] mx-2">
      <div  className="bg-transparent text-white">
        <h2 class="mb-0" id="headingOne5">
          <button
            className="group flex w-full px-4 py-2 text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-transparent [&:not([data-twe-collapse-collapsed])]:text-primary "
            type="button"
            data-twe-collapse-init
            data-twe-collapse-collapsed
            data-twe-target="#collapseTwo5"
            aria-expanded="false"
            aria-controls="collapseTwo5"
          >
          Species
          <span
            className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
          </span>
          </button>
        </h2>

        <div className="p-4"
          id="collapseTwo5"
          class="!visible hidden"
          data-twe-collapse-item
          aria-labelledby="headingTwo5">

          <div className="flex flex-wrap gap-3 items-center justify-center">
            {species.map((item, index) => (
              <FilterBTN
                key={index}
                index={index}
                name="species"
                task={updateSpecies}
                updatePageNumber={updatePageNumber}
                input={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Species;
