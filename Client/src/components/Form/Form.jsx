import React from "react";
import { useState } from "react";
import style from "./Form.module.css";
import { Validation } from "./Validation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Form ({ login }) {

  const [userData, setUserData] = useState ({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState ({
    email: "",
    password: "",
  });

  function handleChange (evento) {
    const property = evento.target.name;
    const value = evento.target.value;
    setUserData ({...userData, [property]: value});
    setErrors (Validation ({...userData, [property]: value}, errors));
  }
  
  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData)
  };  
 
  // Mostrar y ocultar password
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    return (
      <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.login}>Login</h1>
      <h3 className={style.login1}>¡Hola! Te damos la Bienvenida a la App de Rick & Morty</h3>
      <p className={style.login2}>Completa tus datos y empeza a navegar...!</p>
      
      <div className={style.form__container}>
        <div className={style.form__group}>
          <input className={style.input}
            type="text" 
            name="email" 
            id="email"
            placeholder=" "
            value={userData.email}
            onChange={handleChange}
            required/>
          <label className={style.label} htmlFor="email">Escribe tu email...</label >
            <p className={style.error} style={{color:"red"}}>{errors.email}</p>
        </div>

        <div className={style.form__group}>     
          <input className={style.input}
            type={showPassword ? "text" : "password"} 
            name="password" 
            id="password"
            placeholder=" "
            value={userData.password}
            onChange={handleChange}
            required/>
          <label className={style.label} htmlFor="password">Ingresar password...</label>
            <p className={style.error} style={{color:"red"}}>{errors.password}</p>
        </div>    
      </div>
          <button type="button" className={style.ojo} onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          <button type="submit" className={style.btn}>Submit</button>
    </form>
    </div>
    )
};

export default Form;
