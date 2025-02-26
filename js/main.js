import {formValidator} from "./components/formRegister.js";
// 3. CAMBIO MODO CLARO/OSCURO
import("./components/darkMode.js");

// 8. VALIDACIÓN FORMULARIO REGISTRO USUARIO
    const emailInput = document.getElementById('email');
    const userInput = document.getElementById('user');
    const passwordInput = document.getElementById('password');

    // Llamada a la función formValidator() por cada input del formulario
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
//FIN VALIDACIÓN

// 2. MOSTRAR/OCULTAR UN ELEMENTO DE LA WEB
    //2.1 Menú hamburguesa
    const hamburgerButton = document.querySelector('.hamburger');
    hamburgerButton.addEventListener('click', ()=>{
        hamburgerButton.classList.toggle('active');
    })
    // Fin 2.1

    //2.2 Apertura y cierre de modal registro usuario
    const registerButton = document.querySelector('.menu-container li:nth-child(4)');
    const registerButtonClose = document.querySelector('#close-register button');

    registerButton.addEventListener('click', ()=>{
        document.getElementById('register-container').showModal();
    });

    registerButtonClose.addEventListener('click', ()=>{
        document.getElementById('register-container').close();
    })
    
    

    // Fin 2.2
// FIN MOSTRAR/OCULTAR
