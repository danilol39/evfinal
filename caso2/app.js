// Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

//Establecer función para generar un nuevo color
function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';  //Determinar las variables o caracteres que pueden ser usados para el color hexadecimal
    let colorHex = '#';     //Inicia la variable con #

    //Establecer función para generar un nuevo color aleatorio
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16)      // Genera aleatoriamente un indice
        colorHex += digitos[indiceAleatorio]; //Agrega variables o caracters de los digitos posibles a la variable colorHex
    }

    return colorHex;    // Devuelve el color aleatorio generado
}

//Función del botón
boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent =colorAleatorio;          // Actualizar del texto con id color
    document.body.style.backgroundColor = colorAleatorio        // Actualizar el color del fondo
});