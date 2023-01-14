function encriptar(){
    //obtener texto del html
    var encriptarTexto = document.getElementById("texto").value;
    //console.log(encriptarTexto);

    //reemplzar letras
    encriptandoa = encriptarTexto.replace(/a/g,"ai");
    encriptandoe = encriptandoa.replace(/e/g,"enter");
    encriptandoi = encriptandoe.replace(/i/g,"imes");
    encriptandoo = encriptandoi.replace(/o/g,"ober");
    encriptado = encriptandoo.replace(/u/g,"ufat");

    var nuevoTexto = document.getElementById("laterales");
    nuevoTexto.innerHTML = encriptado ;

    console.log(encriptado);
}

function desencriptar(){
    var desencriptarTexto = document.getElementById("texto").value;
    //console.log(desencriptarTexto);

    //reemplzar letras
    desencriptandou = desencriptarTexto.replace(/ufat/g,"u");
    desencriptandoo = desencriptandou.replace(/ober/g,"o");
    desencriptandoi = desencriptandoo.replace(/imes/g,"i");
    desencriptandoe = desencriptandoi.replace(/enter/g,"e");
    desencriptado = desencriptandoe.replace(/ai/g,"a");

    var nuevoTexto = document.getElementById("laterales");
    nuevoTexto.innerHTML = desencriptado ;

    console.log(desencriptado);
}

function copiar(){
    var copiarTexto = document.getElementById("laterales").textContent;
    var newText = document.getElementById("texto");
    newText.innerHTML = copiarTexto;
}