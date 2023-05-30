const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    textarea.value = textoDesencriptado;
    mensaje.value = "";
}
  
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
  
    return stringDesencriptado;
}
  
function copiar() {
    var mensaje = document.getElementsByClassName('mensaje')[0];
    var content = mensaje.value;

    navigator.clipboard.writeText(content)
        .then(() => {
            mensaje.value = ""; //vaciar cuadro de texto 
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar el texto: ", error);
        });

}
