import {formValidator} from "./components/formRegister.js";
import("./components/darkMode.js");

// Llamada a la función formValidator() por cada input del formulario
const emailInput = document.getElementById('email');
const userInput = document.getElementById('user');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', () =>{
    formValidator();
});
userInput.addEventListener('input', ()=>{
    formValidator();
});
passwordInput.addEventListener('input', () => {
    formValidator();
});
//Fin llamadas formValidator()


