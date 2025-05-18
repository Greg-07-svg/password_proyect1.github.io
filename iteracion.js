
const mayuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minuscula = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';


function contra_crear(){

    let caracteres = ""; 

    if (document.getElementById("mayus").checked) caracteres += mayuscula;
    if (document.getElementById("minus").checked) caracteres += minuscula;
    if (document.getElementById("num").checked) caracteres += numeros;
    if (document.getElementById("simbolo").checked) caracteres += simbolos;

    if (caracteres.length === 0 ){
        alert("debes seleccionar al menos una opcion")
        return "";
    }

    const largo_1 = parseInt(document.getElementById("largo").value) || 8;
    let contraseña = '';
    for (let i = 0; i < largo_1; i++) {
        contraseña += caracteres[Math.floor(Math.random() * caracteres.length)]; //pickear de a un caracter
    } 
    
    document.getElementById("resultado").textContent = contraseña;
}


function copiar(){

    if (!document.getElementById("resultado").textContent) {
        alert("No hay ninguna contraseña para copiar.");
        return;
    }

    navigator.clipboard.writeText(document.getElementById("resultado").textContent)
    .then(() => {
      alert("¡Contraseña copiada al portapapeles!");
    })
}


