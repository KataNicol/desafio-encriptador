
document.querySelector()


function encriptarTexto(cadena){
    const mapeoVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };
}

// y luego las reemplazamos con la palabra correspondiente del mapeoVocales
    return cadena.replace(/[aeiou]/g, function(vocal) {
        return mapeoVocales[vocal];
    });


// Ejemplo de uso:
let textoOriginal = "Este es un ejemplo de sustitución de vocales.";
let textoModificado = sustituirVocales(textoOriginal);

console.log(textoModificado);
// Salida: "Estmanzana es un ejemplomple de sustitución de elefantelefanteres."
