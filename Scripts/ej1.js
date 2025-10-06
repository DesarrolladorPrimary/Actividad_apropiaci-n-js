



// --- ENTRADA ---
// Pedimos al usuario la base y la altura (vienen como texto).
let baseTexto = prompt("Ingresa la base del rectángulo (metros):");
let alturaTexto = prompt("Ingresa la altura del rectángulo (metros):");

// --- PARSEO (Conversión) ---
// Convertimos el texto a números para poder calcular.
let baseNumero = Number(baseTexto);
let alturaNumero = Number(alturaTexto);

// --- PROCESO 1: CALCULAR ÁREA ---
// Multiplicamos los números.
let area = baseNumero * alturaNumero;

// --- PROCESO 2: CALCULAR PERÍMETRO ---
// Sumamos los números y multiplicamos por 2.
let perimetro = 2 * (baseNumero + alturaNumero);

// --- SALIDA ---
// Mostramos los resultados.
alert("Área: " + area + " m².");
alert("Perímetro: " + perimetro + " m.");