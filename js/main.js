//Muestra las condiciones de contacto a traves de una animacion.
function mostrarCondiciones() {

    const contact = document.querySelector('#contact');
    contact.className = 'card border border-dark animate__flipOutY';
    const condiciones = document.querySelector('.card-title');
    condiciones.innerHTML = 'Por favor lea atentamente...';

    const subtitle = document.querySelector('.card-subtitle');
    subtitle.innerHTML = '';

    delirio = 'Al aceptar los terminos y condiciones usted nos concede el derecho exclusivo a utilizar toda la informacion personal que dispongamos de usted de la manera en la cual se nos antoje.';
    delirio2 = 'Sus datos personales, informacion en redes sociales, gustos, como asi tambien sus conversaciones privadas, preferencias sexuales y cualquier otra perversidad que alguna vez haya tipeado en el teclado es ahora nuestra.';
    delirio3 = 'El mantenimiento de un sitio no es barato, es costoso y nos vemos obligados a vender su informacion personal; de algo tenemos que vivir despues de todo.';
    delirio4 = 'Agradecemos desde ya su comprension.';
    const text = document.querySelector('.card-text');
    text.innerHTML = delirio + '<br>' + '<br>' + delirio2 + '<br>' + '<br>' + delirio3 + '<br>' + '<br>' + delirio4;


    //Tiempo durante el cual la animacion debe ejecutarse.
    setTimeout(function() { contact.className = 'card border border-dark contact1'; }, 1000);
    return false;
}

//Validando el formulario.
function validarForm() {
    const nombreError = document.querySelector('#nombre + span.error');
    const nombre = document.querySelector('#nombre').value;

    const nombreRex = /^[a-z]+$/i;
    const resultnombre = nombreRex.test(nombre);
    const errornombre = validarNombre(nombreError, resultnombre);

    const apellidoError = document.querySelector('#apellido + span.error');
    const apellido = document.querySelector('#apellido').value;

    const apellidoRex = /^[a-z]+$/i;
    const resultapellido = apellidoRex.test(apellido);
    const errorapellido = validarApellido(apellidoError, resultapellido);

    if (errornombre == true && errorapellido == true) {

        mensajeEnviado();
    }

}

function validarNombre(nombreError, resultnombre) {
    if (resultnombre == true) {

        nombreError.innerHTML = '';
        nombreError.className = 'error';
        return true;
    } else {
        nombreError.textContent = 'Solo letras';
        nombreError.className = 'error active';
        return false;
    }
}

function validarApellido(apellidoError, resultapellido) {
    if (resultapellido == true) {

        apellidoError.innerHTML = '';
        apellidoError.className = 'error';
        return true;
    } else {

        apellidoError.textContent = 'Solo letras';
        apellidoError.className = 'error active';
        return false;
    }
}


function mensajeEnviado() {
    const contact = document.querySelector("#contact1");
    contact.className = 'card border border-dark animate__flipOutY';

    const condiciones = document.querySelector('#condiciones');
    condiciones.innerHTML = '';

    const form = document.querySelector('.form');
    form.innerHTML = 'Su mensaje ha sido enviado con exito!!!';
}