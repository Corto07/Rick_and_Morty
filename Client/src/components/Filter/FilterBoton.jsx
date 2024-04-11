import React from "react";

const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div className="relative">
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x hidden"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="w-full flex border border-primary text-primary px-2 py-2 rounded hover:bg-primary hover:text-white transition ease-in-out duration-300 cursor-pointer"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;

