import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "./Slider.module.css";

export default function Slider () {

  const [images, setImages] = useState([]);

  useEffect(() => {   
    axios.get('https://rickandmortyapi.com/api/character/')
     .then(response =>  {
      
      const characters = response.data.results;
      const imageUrls = characters.map(character => character.image);
      setImages(imageUrls);
    })
    .catch(error => {
      console.error('Error al obtener las imágenes:', error);
    });
  }, []);

  return (
    <div className={style.slider}>
      <div className={style.slideTrack}>
      {images.map((image, index) => (
        <div  className={style.slide}>
          <img key={index} src={image} alt={`Imagen ${index}`} />
        </div>
      ))}
      </div>
    </div>
  );
};
