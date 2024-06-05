window.onload = function() {
  var header = document.querySelector('header');
  var menu = document.getElementById('menu');
  var menu2 = document.getElementById('menu2');
  var headerHeight = header.offsetHeight;
  menu.style.top = `${headerHeight}px`;
  var menuHeight = menu.offsetHeight;
  menu2.style.top = `${headerHeight+menuHeight}px`;
};

window.onresize = function() {
  var header = document.querySelector('header');
  var menu = document.getElementById('menu');
  var menu2 = document.getElementById('menu2');
  var headerHeight = header.offsetHeight;
  menu.style.top = `${headerHeight}px`;
  var menuHeight = menu.offsetHeight;
  menu2.style.top = `${headerHeight+menuHeight}px`;
};


var botonActual = null;
var subBotonActual = null;

function mostrarSeccion(id) {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }
    if (botonActual) {
        botonActual.classList.remove('boton-activo');
    }
    var boton = document.querySelector(`button[onclick="mostrarSeccion('${id}')"]`);
    if (botonActual !== boton) {
        document.getElementById(id).style.display = 'block';
        boton.classList.add('boton-activo');
        botonActual = boton;
    } else {
        botonActual = null;
    }

    // Si la sección 2 es seleccionada, ocultamos todas las subsecciones
    if (id === 'tesis') {
        var subsecciones = document.getElementsByClassName('subseccion');
        for (var i = 0; i < subsecciones.length; i++) {
            subsecciones[i].style.display = 'none';
        }
        if (subBotonActual) {
            subBotonActual.classList.remove('boton-activo');
        }
        subBotonActual = null;
    }
}

function mostrarSubseccion(id) {
    var subsecciones = document.getElementsByClassName('subseccion');
    for (var i = 0; i < subsecciones.length; i++) {
        subsecciones[i].style.display = 'none';
    }
    if (subBotonActual) {
        subBotonActual.classList.remove('boton-activo');
    }
    var subBoton = document.querySelector(`button[onclick="mostrarSubseccion('${id}')"]`);
    if (subBotonActual !== subBoton) {
        document.getElementById(id).style.display = 'block';
        subBoton.classList.add('boton-activo');
        subBotonActual = subBoton;
    } else {
        document.getElementById(id).style.display = 'none';
        subBotonActual = null;
    }
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var menu = document.getElementById("menu");
var sticky = header.offsetHeight;

function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
