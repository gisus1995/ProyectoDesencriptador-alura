let botonEncriptar = document.querySelector(".btn-encriptar");
let botondesencriptar = document.querySelector(".btn-desencriptar");
let parrafo = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".contenedor-finalresultado");

botonEncriptar.onclick = encriptar;
botondesencriptar.onclick= desencriptar;

function encriptar(){
    ocultarAdelante();
    let textarea = recuperarTexto();
    resultado.textContent= encriptarTexto(textarea);
}

function desencriptar(){
    ocultarAdelante();
    let textarea = recuperarTexto();
    resultado.textContent= desencriptarTexto(textarea);
}

function recuperarTexto(){
    let textarea=document.querySelector(".padron")
    return textarea.value
}

function ocultarAdelante(){
    let contenedorParrafo = document.querySelector(".contenedor-parrafo");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textofinal = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textofinal += "ai";
                break;
            case "e":
                textofinal += "enter";
                break;
            case "i":
                textofinal += "imes";
                break;
            case "o":
                textofinal += "ober";
                break;
            case "u":
                textofinal += "ufat";
                break;
            default:
                textofinal += texto[i];
        }
    }

    return textofinal;
}

function desencriptarTexto(mensaje) {
    let textoencriptado = mensaje;
    let textoDesencriptado = "";

    for (let i = 0; i < textoencriptado.length; i++) {
        if (textoencriptado.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i++;
        } else if (textoencriptado.substring(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 4;
        } else if (textoencriptado.substring(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 3;
        } else if (textoencriptado.substring(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 3; 
        } else if (textoencriptado.substring(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3; 
        } else {
            textoDesencriptado += textoencriptado[i];
        }
    }

    return textoDesencriptado;
}


const btncopy = document.querySelector(".btn-copiar");
    btncopy.addEventListener("click", copiar=() => {
    let contenido = document.querySelector(".contenedor-finalresultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log(contenido);
    })

// alerta

let cajaTexto = document.querySelector("#Mensaje");

cajaTexto.addEventListener("input", function(event){
    let texto = event.target.value;
    if (/[A-Z!@#$%^&*()_+]/.test(texto)) {
        alert("Por favor, no uses mayúsculas ni signos en el texto.");
}
});
