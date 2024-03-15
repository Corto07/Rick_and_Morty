import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response1 = await axios.get('https://rickandmortyapi.com/api/character/?page=1');
        const response2 = await axios.get('https://rickandmortyapi.com/api/character/?page=2');
        
        const characters1 = response1.data.results;
        const characters2 = response2.data.results;
        
        const imageUrls1 = characters1.map(character => character.image);
        const imageUrls2 = characters2.map(character => character.image);

        const allImages = [...imageUrls1, ...imageUrls2];
        
        setImages(allImages);
        
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="flex">
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="">
            <img src={image} alt={`Imagen ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
