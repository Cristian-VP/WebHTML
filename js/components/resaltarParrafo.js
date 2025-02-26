document.addEventListener("DOMContentLoaded", () => {
    const parrafo = document.querySelector(".textos p"); // Selecciona el primer párrafo de la página

    parrafo.addEventListener("click", () => {
        parrafo.classList.toggle("resaltado"); // Activa o desactiva la clase
    });
});
