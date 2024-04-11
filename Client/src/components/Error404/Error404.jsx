import React from "react";
import NavBar from "../NavBar/Navbar";
import imgError from "../../assets/img/error404.png"

const Error404 = () => {
  return (
  <>
    <NavBar />
      <img className="mt-6" src={imgError} alt="Error404"/>
  </>
  )
}

export default Error404;