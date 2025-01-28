//import './components/form_register.js';
import {formValidator} from "./components/form_register.js";

const emailInput = document.getElementById('email');
const userInput = document.getElementById('user');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', formValidator);
userInput.addEventListener('input', formValidator);
password.addEventListener('input', formValidator);

//userInput.addEventListener('input', formValidator);*/