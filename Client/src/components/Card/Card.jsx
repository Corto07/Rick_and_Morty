import React from 'react';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/action';
import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { connect } from'react-redux'


const Card = ({id, name, status, species, origin, gender, image, onClose, addFav, removeFav, allCharacters}) => {
   
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
        removeFav(id); // Llama a la función removeFav recibida por props con el id del personaje
    } else {
      setIsFav(true);
        addFav({
          id, name, status, species, origin, gender, image,
        }); // Llama a la función addFav recibida por props con las props del componente
    }
  };

  useEffect(() => {
    allCharacters?.forEach(fav => { 
      if (fav.id === id) {
        setIsFav(true);
      }
    })
  }, [allCharacters]);
  
  return (
    <div className={style.container}>
      {isFav ? 
        <button onClick={handleFavorite}>❤️</button>
        : <button onClick={handleFavorite}>🤍</button>
      }
      {pathname === '/home' && <button onClick={()=>onClose(id)}>X</button>}
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}><h2>{name}</h2></Link> 
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}; 

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
