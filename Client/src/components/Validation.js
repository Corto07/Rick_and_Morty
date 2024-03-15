const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
const expresionRegular = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d).{6,10}$/;

export function Validation (data) {
  const errors = {};
  
  //Validar el email
  if(!regexEmail.test(data.email)) errors.email = "Debe contener la estructura de un email";
  if(!expresionRegular.test(data.email)) errors.email = "La longitud debe tener menos de 35 caracteres";

  //Validar la contraseña
  if(!regexPassword.test(data.password))errors.password = "El Password debe tener un número y entre 6 a 10 caracteres";

  
  return errors; 
};
