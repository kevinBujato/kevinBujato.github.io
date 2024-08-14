const textArea = document.querySelector(".text-area");
const textMensaje = document.querySelector(".text-mensaje");
const botonCopiado = document.querySelector(".copiar");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textMensaje.value = textoEncriptado
    textArea.value = "";
    textMensaje.style.backgroundImage = "none"
}


function encriptar(stringEncriptado){
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptado = stringEncriptado.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    textMensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
            if(stringDesencriptado.includes(matrizCodigo[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
        }
        return stringDesencriptado
    }

    // metodo copiado

    function copiado(){
        
        textMensaje.select();
        textMensaje.setSelectionRange(0, 99999); 
        document.execCommand("copy");


        document.querySelector(".agregaCopy").innerHTML=textMensaje.value;
        document.querySelector(".popUp").style.display="flex";
        setTimeout(function(){
            document.querySelector(".popUp").style.transform="translate(-61%, -50%) scale(1)";
            document.querySelector(".popUp").style.opacity="1";
        }, 100);
     
    }


    botonCopiado.addEventListener("click",function(){
        if(textMensaje.value !== ""){

            copiado();

        }else{
            alert('por favor , encripte un texto');
        }
    });

    document.querySelector(".btn-ok").addEventListener("click",function(){
        document.querySelector(".popUp").style.display="none";
            document.querySelector(".popUp").style.transform="translate(-61%, -50%) scale(0.7)";
            document.querySelector(".popUp").style.opacity="0"; 
    });