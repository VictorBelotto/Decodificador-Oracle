const textoCodificador = document.querySelector("#texto_codificador-descodificador");

const botaoCodificar = document.querySelector(".botao-criptografar");

const botaoDescodificar = document.querySelector(".botao-descriptografar");

botaoCodificar.addEventListener("click" , (event) => {event.preventDefault();


    let textoParaCodificar = textoCodificador.value;

   let textoCodificado = textoParaCodificar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    console.log(`Texto a ser Codificado: ${textoParaCodificar}`)

    console.log(`Texto codificado: ${textoCodificado}`)
})
 

botaoDescodificar.addEventListener("click", (event) => {event.preventDefault();

    let textoParaDescodificar = textoCodificador.value;

    console.log(`Texto a ser Descodificar: ${textoParaDescodificar}`)

    let textoDescodificado = textoParaDescodificar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    console.log(`Texto descodificado: ${textoDescodificado}`)


})


/* Botao com parent node, ai usa a mesma função para codi/descodi , nele ele identifica em qual foi clicado */