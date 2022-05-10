const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".text-area");

inputTexto.value = ""

// Encriptar

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}



function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length;i++){
        if (stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}

//Desencriptar

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = ""
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length;i++){
        if (stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
}
//Copiar

const botonCopiar = document.querySelector(".copy");
const textoParaCopiar = document.querySelector(".text-area");
const mensajeCopiado = document.querySelector("#mensaje")

botonCopiar.addEventListener("click", function(){

    textoParaCopiar.focus();
    document.execCommand("selectAll");
    document.execCommand("copy")
    mensajeCopiado.innerHTML = "copiado al portapapeles"
    setTimeout(()=> mensajeCopiado.innerHTML = "", 3000)

})