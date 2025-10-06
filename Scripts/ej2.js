/*
Las tres notas del estudiante
Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
valores numéricos, muestre el promedio en pantalla.
*/

// --- ENTRADA ---
// Pedimos las tres notas.
let nota1Texto = prompt("Ingresa la primera nota:");
let nota2Texto = prompt("Ingresa la segunda nota:");
let nota3Texto = prompt("Ingresa la tercera nota:");

// --- PARSEO ---
// Convertimos las notas a números.
let nota1 = Number(nota1Texto);
let nota2 = Number(nota2Texto);
let nota3 = Number(nota3Texto);

// --- PROCESO ---
// Calculamos el promedio sumando las notas y dividiendo por la cantidad.
let promedio = (nota1 + nota2 + nota3) / 3;

// --- SALIDA ---
// Mostramos el resultado.
alert("El promedio de las notas es: " + promedio);
