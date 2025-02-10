
//Expresiones regulares
const regExUser = new RegExp('^[a-zA-Z]+([._-]?[a-zA-Z0-9]+)*$');
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
    //EMAIL
    function emailValidation(input) {
        console.log("Entro en la validación y soy email");
        let value = input.trim();
        errorEmail.style.display = "none";
        emailInput.style.border = "";

        // Valido su longitud
        if(value.length  < 10 || value.length > 60) {
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "Su longitud debe ser de 16 - 60 carácteres";
            return false;
        }
        // Valido su formato
        if(!regExEmail.test(value)){
            errorEmail.style.display = "block";
            errorEmail.innerHTML = "No tiene el formato permitido. Debe contener: a-z A-Z 0-9 . - _ @";
            return false;
        }

        /*emailInput.style.border = "2px solid lightyellow";*/
        return true;
    }
    //USER
    function userValidation(input) {
        console.log("Entro en la validación y soy user");
        let value = input.trim();
        errorUser.style.display = "none";
        userInput.style.border = "";

        // Valido su longitud
        if(value.length  < 4 || value.length > 10) {
            errorUser.style.display = "block";
            errorUser.innerHTML = "Su longitud debe ser de 4 - 10 carácteres";
            return false;
        }
        //Valido su contenido
        if(!regExUser.test(value)){
            errorUser.style.display = "block";
            errorUser.innerHTML = "Debe contener : a-z A-Z 0-9 . - _";
            return false;
        }

        /*userInput.style.border = "2px solid lightyellow";*/
        return true;
    }

    //PASSWORD
    function passwordValidation(input) {
        console.log("Entro en la validación y soy password");
        let value = input.trim();
        errorPassword.style.display = "none";
        passwordInput.style.border = "";

        // Valido la longitud mínima
        if(value.length  < 8 || value.length > 15) {
            errorPassword.style.display = "block";
            errorPassword.innerHTML = "Debe de tener de 8 a 15 carácteres";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos una letra [a-z]
        if(!/(?=.*[a-z])/i.test(value)){
            errorPassword.style.display = "block";
            errorPassword.innerHTML = "Tiene que tener al menos una letra";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos un carácter especial [\W]
        if(!/(?=.*\W)/.test(value)){
            errorPassword.style.display = "block";
            errorPassword.innerHTML = "Tiene que tener al menos un carácter especial";
            return false;
        }
        // Lookhead positivo que asegura que exista al menos un número positivo [0-9]
        if(!/(?=.*\d)/.test(value)){
            errorPassword.style.display = "block";
            errorPassword.innerHTML = "Tiene que tener al menos un número entero positivo";
            return false;
        }

        /*passwordInput.style.border = "2px solid lightyellow";*/
        return true;
    }

    //Function validatos form
    export function formValidator () {
        let userInputValue = userInput.value;
        let passwordInputValue = passwordInput.value;
        let emailInputValue = emailInput.value;

        const emailInputValidated =  emailValidation(emailInputValue);
        const userInputValidated =  userValidation(userInputValue) ;
        const passwordInputValidated = passwordValidation(passwordInputValue);

        if( emailInputValidated && userInputValidated && passwordInputValidated ){

            emailInput.style.border = "2px solid var(--color-green-letter)";
            userInput.style.border = "2px solid var(--color-green-letter)";
            passwordInput.style.border = "2px solid var(--color-green-letter)";

            buttonSubmit.removeAttribute('disabled');
            buttonSubmit.setAttribute('enable', 'true');
        }else{
            buttonSubmit.removeAttribute('enabled');
            buttonSubmit.setAttribute('disabled', 'true');
        }
    }

