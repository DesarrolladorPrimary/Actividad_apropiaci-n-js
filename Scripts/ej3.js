/*
El contador de visitas
Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
duplican las visitas. Representa esta situación y determina cuál es el valor final del
contador.
*/

// --- ENTRADA (Estado Inicial) ---
// El contador empieza en 100.
let contador = 100;

// --- PROCESO 1: AUMENTAR VISITAS ---
// Recibe 25 visitas adicionales.
contador = contador + 25; // También se puede escribir como: contador += 25;

// --- PROCESO 2: DISMINUIR VISITAS ---
// Pierde 10 visitas por un error.
contador = contador - 10; // También se puede escribir como: contador -= 10;

// --- PROCESO 3: DUPLICAR VISITAS ---
// El total de visitas se duplica.
contador = contador * 2; // También se puede escribir como: contador *= 2;

// --- SALIDA ---
// Mostramos el valor final del contador.
alert("El valor final del contador de visitas es: " + contador);