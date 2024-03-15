import React from "react";
import Card from "../Card/Card";


export default function Cards({ characters, onClose }) {
  return (
    <div className="">
      {/* <div className={style.slider}>
        <Slider/>
      </div> */}
    <div className="">
      {characters.map(
        ({ id, name, status, species, origin, gender, image, addFav, removeFav }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            removeFav={removeFav}
            addFav={addFav}
          />
        )
      )}
      </div>
    </div>
  );
}
