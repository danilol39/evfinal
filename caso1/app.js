// Establecer la variable del primer elemento del arreglo, siendo este el que se mostrará al entrar a la web
var x = 0;

// Arreglo de cada detalle de cada departamento
var imagen = ['img/imagen1.jpg','img/imagen2.jpg','img/imagen3.jpg','img/imagen4.jpg','img/imagen5.jpg','img/imagen6.jpg','img/imagen7.jpg','img/imagen8.jpg','img/imagen9.jpg','img/imagen10.jpg']
var grupo = ['TALE CONSTRUCTORA SAC','M&W CONSTRUCCIONES SAC','GRUPO DEGOL','Constructora San Jose Aqp SAC','AM&M GRUPO INMOBILIARIO','BESCO','PROMSAL','QUATRO INMOBILIARIA','AYS ARQUITECTOS','GRUPO TYC']
var precio = ['$ 78,850','$ 108,050','$ 39,300','$169,750','$ 322,000','$ 74,405','$ 186,750','$ 93,475','$ 212,000','$ 152,712']
var area =['57.40 m²','62.50 m²','45.70 m²','108 m²','150.20 m²','65 m²','108 m²','51 m²','101 m²','67 m²']


// Función para actualizar el contenido mostrado en la página
function actualizarDetalles() {

    document.getElementById('imagen').src = imagen[x];      // Actualiza la imagen del departamento a partir de su id

    document.getElementById('grupo').innerText = grupo[x];      // Actualiza el nombre de la constructora a partir de su id

    document.getElementById('precio').innerText = precio[x];        // Actualiza el precio del departamento a partir de su id

    document.getElementById('area').innerText = area[x];        // Actualiza el área del departamento a partir de su id

    document.getElementById('mensaje').innerText = '';      // Deja en blanco el mensaje
}

// Función para navegar al departamento anterior
function atras() {
    if (x > 0) {
        x--;     // Disminuye el número del indice del arreglo
        actualizarDetalles();    //Actualiza los detalles
    } else {
        document.getElementById('mensaje').innerText = 'Estás en el primer departamento.';      // Muestra el mensaje que llego al tope (inicio) reemplazando el texto de mensaje
        window.alert("Estás en el primer departamento");
    }
}

// Función para navegar al siguiente departamento
function siguiente() {
    if (x < imagen.length - 1) {
        x++;    // Aumenta el número del indice del arreglo
        actualizarDetalles();   //Actualiza los detalles
    } else {
        document.getElementById('mensaje').innerText = 'Estás en el último departamento.';      // Muestra el mensaje que llego al tope (final) reemplazando el texto de mensaje
        window.alert("Estás en el último departamento");
    }
}

