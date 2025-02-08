// variable 
let amigos = [];

// funcione de texto
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto
}
// funcion de añadir nombres 
function añadirNombre() {
   
const nombreIngresado = document.getElementById("amigo").value ;
console.log ("nombres=" +nombreIngresado)
if (nombreIngresado!=="") { 
    amigos.push(nombreIngresado);
    console.log (amigos);
    nombresEnInterfaz();
    } else {
    alert ("No ingresaste ningun nombre");
    document.getElementById("amigo").value = "";
    
    
}
limpiarCaja();

return;
}
//funcion nombres en la interfaz 
function nombresEnInterfaz() {
    let listaHTML = "<ul>"; 

    amigos.forEach((nombre) => {
        listaHTML += `<li>${nombre}</li>`; 
    });

    listaHTML += "</ul>"; 

    asignarTextoElemento("#listaAmigos", listaHTML);
}

// funcion de limpiado de caja 
function limpiarCaja () {
    let valorCaja =document.querySelector("#amigo");
    valorCaja.value= "";
}

//funcion sortear amigo 
function sortearAmigo() {
    if (amigos.length < 2){
        alert ("ingrese más de un nombre de usuario");
        return;
    }
    if (amigos.length === 0)
    {alert ("No ingresaste nombres para sortear")
    return;
    }
    let nombreAleatorio = Math.floor(Math.random()*amigos.length);
    let nombreElegido = amigos[nombreAleatorio];
    asignarTextoElemento ("#resultado", `¡tu amigo secreto es ${nombreElegido}!`);
    console.log ("nombre elegido =" +nombreElegido );
    amigos = [];
    nombresEnInterfaz ();
}


    


 







