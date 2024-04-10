const textoOriginal = document.querySelector(".textoOriginal");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptarTexto(textoOriginal.value)
    mensaje.value = textoEncriptado
    textoOriginal.value = "";
    mensaje.style.backgroundImage ="none"
}


function encriptarTexto(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptarTexto(textoOriginal.value)
    mensaje.value = textoEncriptado
    textoOriginal.value = "";
    }

function desencriptarTexto(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
