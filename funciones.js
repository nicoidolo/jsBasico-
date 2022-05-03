
// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression

// el nombre reservado de function y parametros que recibira esa function

// Declarativas
function miFuncion() { // function declaration Declarativas expresión
    return 3;
}

miFuncion(); // mandamos llamar la funcion

// Expresión
var miFuncion = function (a, b) { // function Expression (también conocidas como funciones anónimas)
    return a + b
}

miFunction(); // mandamos llamar la variable como funcion

/* ============================= */

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}

saludarEstudiantes("Nico");

function saludarEstudiantes(estudiante) {
    console.log('Hola ${estudiante}'); // template strings (Plantillas de cadena de texto)
}

saludarEstudiantes("Nico");

function sumar(a, b) { // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
    var resultado a + b;
}

// Return, cómo regresamos un valor con una function.

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

sumar(1, 2)

function sumar(a, b) {
    return a + b;
}

sumar(20, 30);