import React from "react";
import FilterBTN from "../FilterBTN";
import { Collapse, initTWE, } from "tw-elements";

const Status = ({ updateStatus, updatePageNumber }) => {

  initTWE({ Collapse });
  
  let status = ["Alive", "Dead", "Unknown"];
  
  return (
    <div id="accordion">
      <div  className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
        <h2 class="mb-0" id="headingOne5">
          <button
            className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
            type="button"
            data-twe-collapse-init
            data-twe-collapse-collapsed
            data-twe-target="#collapseOne5"
            aria-expanded="false"
            aria-controls="collapseOne5"
          >
          Status
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
          id="collapseOne5"
          class="!visible hidden"
          data-twe-collapse-item
          aria-labelledby="headingOne5">

          <div className="flex flex-wrap gap-3">
            {status.map((item, index) => (
              <FilterBTN
                key={index}
                index={index}
                name="status"
                task={updateStatus}
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

export default Status;