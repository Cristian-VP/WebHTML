let datosGuardados = [];
const lista = document.getElementsByClassName('card');

function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < lista.length; i++){
    const card = lista[i];

    const divs = card.getElementsByTagName('div');
    const h2s = card.getElementsByTagName('h2');
    const ps = card.getElementsByTagName('p');
    const imgs = card.getElementsByTagName('img');

    for (let j = 0; j < divs.length; j++){
        datosGuardados.push({
            texto: divs[j].textContent,
            visitas: generarNumeroAleatorio(1, 1000)
        });
    }
    for (let j = 0; j < h2s.length; j++){
        datosGuardados.push({
            txto: h2s[j].textContent,
            visitas: generarNumeroAleatorio(1, 1000)
        });
    }
    for (let j = 0; j < ps.length; j++){
        datosGuardados.push({
            texto: ps[j].textContent,
            visitas: generarNumeroAleatorio(1, 1000)
        });
    }
    for (let j = 0; j < imgs.length; j++){
        datosGuardados.push({
            texto: imgs[j].src,
            visitas: generarNumeroAleatorio(1, 1000)
        });
    }
}

console.log(datosGuardados);

datosGuardados.sort((a, b) => b.vistas - a.vistas);

for (let i = 0; i < datosGuardados.length; i++){
    console.log(`Texto: ${datosGuardados[i].texto}, Visitas: ${datosGuardados[i].visitas}`);
}

const mostrarComentariosBtn = document.getElementById('mostrar-comentarios');
const formularioComentarios = document.getElementById('formulario-comentarios');
const listaComentarios = document.getElementById('lista-comentarios');
const formComentarios = document.getElementById('form-comentarios');
const comentarioInput = document.getElementById('comentario');
const comentariosUl = document.getElementById('comentarios');

// Mostrar u ocultar el formulario y la lista de comentarios al hacer clic en el botón
mostrarComentariosBtn.addEventListener('click', () => {
    if (formularioComentarios.style.display === 'none' || formularioComentarios.style.display === '') {
        formularioComentarios.style.display = 'block';
        listaComentarios.style.display = 'block';
    } else {
        formularioComentarios.style.display = 'none';
        listaComentarios.style.display = 'none';
    }
});

// Enviar un comentario y agregarlo a la lista
formComentarios.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener el valor del comentario
    const comentario = comentarioInput.value.trim();

    // Verificar si el comentario no está vacío
    if (comentario) {
        // Crear un nuevo elemento de lista para el comentario
        const comentarioLi = document.createElement('li');
        comentarioLi.textContent = comentario;

        // Agregar el comentario a la lista de comentarios
        comentariosUl.appendChild(comentarioLi);

        // Limpiar el campo de entrada del comentario
        comentarioInput.value = '';
    }
});