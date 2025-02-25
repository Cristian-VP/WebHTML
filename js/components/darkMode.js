// Actualización del tema en el localStorage cuando se recarga la página
localStorage.getItem("theme");


//Funcion que devolverá el estado del tema actual
function calculateSettingTheme ({localStorageTheme, systemSettingsDark}) {
    //LocalStorage nos retornará el tema de la sesión
    if(localStorageTheme !== null){
        return localStorageTheme;
    }
    //System nos retornará el color-scheme que el usuario tiene por defecto en su Sistema Operativo o en el Navegador
    if(systemSettingsDark.matches){
        //console.log("Entro en dark");
        console.log(systemSettingsDark.matches);
        return "dark";
    }
    console.log("Doy light");
    return "light";
}

const localStorageTheme = localStorage.getItem("theme");

const systemSettingsDark = window.matchMedia('(prefers-color-scheme: dark)');
let currentThemeSetting = calculateSettingTheme({localStorageTheme, systemSettingsDark});
console.log(systemSettingsDark);

//Si window.matchMedia || localStorage tiene algún valor damos al data-theme de <html> su valor
if(currentThemeSetting === "dark"){
    document.querySelector("html").setAttribute("data-theme", 'dark');
    document.querySelector("[data-theme-toogle] img").setAttribute('src',  "../../assets/icons/dark_mode.svg");
}else{

    document.querySelector("[data-theme-toogle]").setAttribute('src', "../../assets/icons/light_mode.svg" );
    document.querySelector("html").setAttribute("data-theme", 'light');
}

console.log(currentThemeSetting);

//Activar el cambio de tema mediante addEvenListener del botton
const themeButton = document.querySelector('[data-theme-toogle]');
const iconButton = document.querySelector('[data-theme-toogle] img');

themeButton.addEventListener('click', (event) => {
    // Activa el cambio de tema
    let newTheme  = currentThemeSetting === "dark" ? "light" : "dark";
    console.log(newTheme);

    // Actualización contenido iconos, arial-label, animation
    let newContent = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
    themeButton.setAttribute('aria-label', newContent);
    iconButton.setAttribute('src', newTheme === "dark" ? "../../assets/icons/dark_mode.svg" : "../../assets/icons/light_mode.svg");

    //Actualización del nodo padre html para su interpretación en CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);

    //Actualización en Local Storage
    localStorage.setItem("theme", newTheme);
    // sobre-escribe el primer currentThemeSetting para contradecir su valor inicial y permitir el cambio
    currentThemeSetting  = newTheme;
});
