import React from "react";
import NavBar from "../NavBar/Navbar";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar"
import Footer from "../Footer/Footer";

const Home = () => {

  return (
    <div className="w-full" >
      <NavBar/>
      <SearchBar />
      <Header/>
      <Footer/>
    </div>
  )
};

export default Home;
