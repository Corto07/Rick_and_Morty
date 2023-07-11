import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';
import NavLink from "../NavLink/NavLink";

class Nav extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return <nav className={style.nav}>
      
      <div className={style.contenedor}>
      <NavLink to={'/home'}>
        <span>Home</span>
      </NavLink>
      
      <NavLink to={'/about'}>
        <span>About</span>
      </NavLink>

      <NavLink to={'/favorites'}>
        <span>Favoritos</span>
      </NavLink>
      </div>
      
      <SearchBar onSearch={this.props.onSearch}/>
    </nav>

  }
}

export default Nav;