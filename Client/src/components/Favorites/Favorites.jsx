import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/action';


function Favorites({ myFavorites }) {

const dispatch = useDispatch();
const [aux, setAux] = useState (false);

const handleOrder = (e) => {  
  dispatch(orderCards(e.target.value));
  setAux(!aux);  
};

const handleFilter = (e) => {
  dispatch(filterCards(e.target.value)); 
}

return <div>
    <div>
      <select onChange={handleOrder}>
        <option value="A" >Ascendente</option>
        <option value="D" >Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="" >All Favorites</option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
        <option value="Genderless" >Genderless</option>
        <option value="unknown" >Unknown</option>
      </select>
    </div>{

    myFavorites.map((char)=>{
      return(
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin?.name}
          image={char.image}
          onClose={char.onClose}
        />)
      })
  }</div>;
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,    
  };
};

export default connect(mapStateToProps)(Favorites);