import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Slider.module.css";
import style from "./Slider.module.css";

export default function Slider () {

  const [images, setImages] = useState([]);

  useEffect(() => {   
    // axios.get('https://rickandmortyapi.com/api/character')
    axios.get('http://localhost:3001/rickandmorty/character')
    .then(response => {
      const characters = response.data.results;
      const imageUrls = characters.map(character => character.image);
      setImages(imageUrls);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

  return (
    <div className={style.slider}>
      <div className={style.slideTrack}>
      {images.map((image, index) => (
        <div key={index} className={style.slide}>
          <img src={image}  />
        </div>
      ))}
      </div>
    </div>
  );
};
