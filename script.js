

function encriptar(){
    //obtener texto del html
    var encriptarTexto = document.getElementById("texto").value;
    console.log(encriptarTexto);

    //reemplzar letras
    encriptandoa = encriptarTexto.replace(/a/g,"ai");
    encriptandoe = encriptandoa.replace(/e/g,"enter");
    encriptandoi = encriptandoe.replace(/i/g,"imes");
    encriptandoo = encriptandoi.replace(/o/g,"ober");
    encriptado = encriptandoo.replace(/u/g,"ufat");

    console.log(encriptado);
    alert("encriptarTexto");
}

function desencriptar(){
    var desencriptarTexto = document.getElementById("texto").value;
    console.log(desencriptarTexto);

    //reemplzar letras
    desencriptandou = desencriptarTexto.replace(/ufat/g,"u");
    desencriptandoo = desencriptandou.replace(/ober/g,"o");
    desencriptandoi = desencriptandoo.replace(/imes/g,"i");
    desencriptandoe = desencriptandoi.replace(/enter/g,"e");
    desencriptado = desencriptandoe.replace(/ai/g,"a");

    console.log(desencriptado);
    alert("encriptarTexto");
}


/*
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"


    encriptado = encriptarTexto.replace(/a/g,"ai");
    encriptado = encriptarTexto.replace(/e/g,"enter");
    encriptado = encriptarTexto.replace(/i/g,"imes");
    encriptado = encriptarTexto.replace(/o/g,"ober");
    encriptado = encriptarTexto.replace(/u/g,"ufat");
*/