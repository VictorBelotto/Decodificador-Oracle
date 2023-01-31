
const textoCodificador = document.querySelector("#texto_codificador-descodificador");

const botaoCodificar = document.querySelector(".botao-criptografar");

const botaoDescodificar = document.querySelector(".botao-descriptografar");

const botaoCopiar = document.querySelector(".botao-copiar");

const mensagemResultado = document.querySelector("#mensagem-resultado");

const cardBotoes = document.querySelector("#card_botoes");

const textoNenhumaMensagem = document.querySelector(".texto_nenhuma-mensagem");

const algoritimoCriptografia = [ ["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]] ;

cardBotoes.addEventListener("click" , (event) => {event.preventDefault();
    let textoDigitado =  textoCodificador.value.toLowerCase() 

    if(textoDigitado !== ""){


        if(event.target === botaoCodificar){
            encriptar(textoDigitado);
        }

        if(event.target === botaoDescodificar){
            desencriptar(textoDigitado); 
        }

        exibeResultado()
    
    }else{
        exibeNenhumaMensagem();
    }

})
 
botaoCopiar.addEventListener("click", (event)=> {event.preventDefault();
   
    btnCopiar()
    exibeNenhumaMensagem()
})
    


function encriptar(textoParaCodificar){

    for(let i = 0; i < algoritimoCriptografia.length; i++){
        textoParaCodificar = textoParaCodificar.replaceAll(algoritimoCriptografia[i][0] , algoritimoCriptografia[i][1]);
              
    }

   mensagemResultado.value = textoParaCodificar
 
}

function desencriptar(textoParaDescodificar){

   for(let i = 0; i < algoritimoCriptografia.length; i++){
       textoParaDescodificar = textoParaDescodificar.replaceAll(algoritimoCriptografia[i][1] , algoritimoCriptografia[i][0]);
             
   }

  mensagemResultado.value = textoParaDescodificar

}

function exibeResultado(){
    textoNenhumaMensagem.classList.add("display-none")
    mensagemResultado.classList.remove("display-none")
    botaoCopiar.classList.remove("display-none")
}


function exibeNenhumaMensagem(){
    textoCodificador.value = "";
    mensagemResultado.value = "";
    mensagemResultado.classList.add("display-none")
    textoNenhumaMensagem.classList.remove("display-none")
    botaoCopiar.classList.add("display-none")
    textoCodificador.focus();
}



function btnCopiar(){
    let textoCopiado = mensagemResultado.value;
    navigator.clipboard.writeText(textoCopiado)
}
