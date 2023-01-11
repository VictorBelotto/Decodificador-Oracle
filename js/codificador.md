/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

let letraA = "a amarela";

console.log(`Antes do Replace ${letraA}`);

let letraMod = letraA.replace(/a/g, "ai");

console.log(`Depois do Replace ${letraMod}`);

let devolta = letraMod.replace(/ai/g, "a")

console.log(`Depois do Replace de volta ${devolta}`);

*/
