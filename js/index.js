const textoCodificador = document.querySelector("#texto_codificador-descodificador");

const botaoCodificar = document.querySelector(".botao-criptografar");

const botaoDescodificar = document.querySelector(".botao-descriptografar");

const botaoCopiar = document.querySelector(".botao-copiar");

const mensagemResultado = document.querySelector("#mensagem-resultado");

const cardBotoes = document.querySelector("#card_botoes");

const textoNenhumaMensagem = document.querySelector(".texto_nenhuma-mensagem");


cardBotoes.addEventListener("click" , (event) => {event.preventDefault();


    if(textoCodificador.value !== ""){

        if(event.target == botaoCodificar){
            let textoParaCodificar = textoCodificador.value;
    
            let textoCodificado = textoParaCodificar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
            mensagemResultado.value = textoCodificado;
        }



        function logica(){
            let array = [ [/e/g , "enter"] , [/i/g , "imes"] , [/a/g, "ai"] , [/o/g, "ober"] , [/u/g, "ufat"]]  

            for(let arrays of array){

            }
        }




        /* --------------------------------------------------------------------- */
        if(event.target == botaoDescodificar){
            let textoParaDescodificar = textoCodificador.value;
    
            let textoDescodificado = textoParaDescodificar.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
            mensagemResultado.value = textoDescodificado;
            
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
    



function exibeNenhumaMensagem(){
    textoCodificador.value = "";
    mensagemResultado.value = "";
    mensagemResultado.classList.add("display-none")
    textoNenhumaMensagem.classList.remove("display-none")
    botaoCopiar.classList.add("display-none")
    textoCodificador.focus();
}

function exibeResultado(){
    textoNenhumaMensagem.classList.add("display-none")
    mensagemResultado.classList.remove("display-none")
    botaoCopiar.classList.remove("display-none")
}

function btnCopiar(){
    let textoCopiado = mensagemResultado;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}