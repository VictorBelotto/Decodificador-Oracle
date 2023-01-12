/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

let letraA = "uma frase muito louca que faça sentido e volte a ser como era antes com muitas palavras ";

console.log(`Antes do Replace ${letraA}`);

let letraMod = letraA.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

console.log(`Depois do Replace ${letraMod}`);

let devolta = letraMod.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

console.log(`Depois do Replace de volta ${devolta}`);

*/
