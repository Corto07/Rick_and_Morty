import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState('')
 
  function handleChange(evento){
    setId(evento.target.value)
  }
 
  const search = () => {
    onSearch(id)
    setId('') } 
   
  return (
    <div className={styles.divBotton}> 
      
      <input className={styles.input}
        type="text"
        name="Id" 
        id="Id"
        placeholder=" " 
        value={id} 
        onChange={handleChange} 
        required/>
      
      <label className={styles.label} htmlFor="Personaje">Ingrese Id del personaje</label>
      
      <button type="submit" className={styles.botton} onClick={search}>Agregar</button>
   
    </div>
  );
}