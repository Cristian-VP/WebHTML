//Expresiones regulares
const regExUser = new RegExp('^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*$');
//const regExPassword = new RegExp('^(?=.*[A-Za-z])(?=.*\\W)(?=.*\\d).{8,15}$');
const regExEmail     = new RegExp('^[\\w.-]{3,30}@[a-z]{3,30}\\.[a-z]{2,3}$');

//DOM inputs
const userInput = document.getElementById('user');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const buttonSubmit = document.getElementById('register-button');
const errorEmail = document.getElementById('email-error');
const errorPassword = document.getElementById('password-error');
const errorUser = document.getElementById('user-error');

// Functions validators inputs
    //USER
    function userValidation(input) {
        let value = input;
        // Valido su longitud
        if(value.length  < 4 || value.length > 10) {
            errorUser.innerHTML = "Su longitud debe ser de 4 - 10 carácteres";
            errorUser.style.display = "block";
            return false;
        }
        //Valido su contenido
        if(!regExUser.test(value)){
            errorUser.innerHTML = "Solo puede contener: a-z A-Z 0-9 . - _";
            errorUser.style.display = "block";
            return false;
        }
        errorUser.style.display = "none";
        userInput.style.border = "2px solid lightyellow";
        return true;
    }
    //EMAIL
    function emailValidation(input) {
        let value = input;
        // Valido su longitud
        if(value.length  < 10 || value.length > 60) {
            errorEmail.innerHTML = "Su longitud debe ser de 16 - 60 carácteres";
            errorEmail.style.display = "block";
            return false;
        }
        // Valido su formato
        if(!regExEmail.test(value)){
            errorEmail.innerHTML = "No tiene el formato permitido. Solo puede contener: a-z A-Z 0-9 . - _ @";
            errorEmail.style.display = "block";
            return false;
        }
        errorEmail.style.display = "none";
        emailInput.style.border = "2px solid lightyellow";
        return true;
    }
    //PASSWORD
    function passwordValidation(input) {
        let value = input;
        // Valido la longitud mínima
        if(value.length  < 8 || value.length > 15) {
            errorPassword.innerHTML = "Debe de tener de 8 a 15 carácteres";
            errorUser.style.display = "block";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos una letra [a-z]
        if(!/(?=.*[a-z])/i.test(value)){
            errorPassword.innerHTML = "Tiene que tener al menos una letra";
            errorPassword.style.display = "block";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos un carácter especial [\W]
        if(!/(?=.*\W)/.test(value)){
            errorPassword.innerHTML = "Tiene que tener al menos un crácter especial";
            errorPassword.style.display = "block";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos un número positivo [0-9]
        if(!/(?=.*\d)/.test(value)){
            errorPassword.innerHTML = "Tiene que tener al menos un número entero positivo";
            errorPassword.style.display = "block";
            return false;
        }
        errorUser.style.display = "none";
        userInput.style.border = "2px solid lightyellow";
        return true;
    }

//Function validatos form
function formValidator (){
    let userInputValue = userInput.value;
    let passwordInputValue = passwordInput.value;
    let emailInputValue = emailInput.value;

    const userInputValidated = userValidation(userInputValue) ;
    const passwordInputValidated = passwordValidation(passwordInputValue);
    const emailInputValidated = emailValidation(emailInputValue);

    if( userInputValidated && passwordInputValidated && emailInputValidated){
        emailInput.style.borderColor = "green";
        userInput.style.borderColor = "green";
        passwordInput.style.borderColor = "green";

        buttonSubmit.removeAttribute('disabled');
        buttonSubmit.setAttribute('enable', 'true');
    }
}

