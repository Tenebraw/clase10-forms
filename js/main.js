function mostrarCondiciones() {

    const contact = document.querySelector('#contact');
    contact.className = 'card border border-dark animate__flipOutY';
    const condiciones = document.querySelector('.card-title');
    condiciones.innerHTML = 'Por favor lea atentamente';

    const subtitle = document.querySelector('.card-subtitle');
    subtitle.innerHTML = '';

    delirio = 'Al aceptar los terminos y condiciones usted nos concede el derecho exclusivo a utilizar toda la informacion personal que dispongamos de usted de la manera en la cual se nos antoje.';
    delirio2 = 'Sus datos personales, informacion en redes sociales, gustos, como asi tambien sus conversaciones privadas, preferencias sexuales y cualquier otra perversidad que alguna vez haya tipeado en el teclado es ahora nuestra.';
    delirio3 = 'El mantenimiento de un sitio no es barato, es costoso por si lo desconocia y de algo tenemos que vivir.';
    delirio4 = 'Agradecemos desde ya su comprension.';
    const text = document.querySelector('.card-text');
    text.innerHTML = delirio + '<br>' + '<br>' + delirio2 + '<br>' + '<br>' + delirio3 + '<br>' + '<br>' + delirio4;



    setTimeout(function() { contact.className = 'card border border-dark'; }, 1000);
    return false;
}