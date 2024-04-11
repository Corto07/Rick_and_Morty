import React from "react";
import imagen from "../../assets/img/imgUnder.png"
import { Link } from "react-router-dom";

const FormCrear = () => {

    return (
      <div className="justify-center items-center">
        <h1 className="uppercase mt-4 p-2 text-white">We are in the Character creation form</h1>
        <img className="mt-4 mb-14 block mx-auto w-[80%]" src={imagen} alt="Under construction" />
        <Link to="/">
          <button className="px-2 py-2 border border-white rounded-lg text-white hover:text-blue-600 hover:border-blue-500">Back Home</button>
        </Link>
      </div>
    )
}

export default FormCrear;
