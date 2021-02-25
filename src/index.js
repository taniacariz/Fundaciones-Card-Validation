import validator from './validator.js';

//Funcion desde Home a Página Hotel

let inicio = document.getElementById("siguientePaginaHotel")
inicio.addEventListener("click", nextPageOne)

function nextPageOne() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPaginaHotel").style.display = "block";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}

//Funcion Página Hotel a Donar

let donar = document.getElementById("donarCasita")
donar.addEventListener("click", nextPageTwo)

function nextPageTwo() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "block";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}

//Funcion Donar a Datos Tarjeta

//let pagar = document.getElementById("botonFinalizar")
//pagar.addEventListener("click", nextPageTree)

//function nextPageTree() {
//  document.getElementById("home").style.display = "none";
//  document.getElementById("segundaPaginaHotel").style.display = "none";
//  document.getElementById("tercerPaginaHotel").style.display = "none";
//  document.getElementById("cuartaPaginaHotel").style.display = "block";
//}

//Funcion Gracias

function repeat() {
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}

//Pasa cada elemento por el evento click llamando a la función repeat

let volver = document.getElementsByClassName("volver")
Array.from(volver).forEach((element) => { element.addEventListener("click", repeat) })


//Resultados true or false

const confirmacionTarjeta = () => {

    let numeroTarjeta = document.getElementById("inputTarjeta").value // Valor numero de tarjeta
    // alert(numeroTarjeta) 

    if (numeroTarjeta.length < 16 || numeroTarjeta === 0) { //alert número erróneo 
        alert("Ingresa un número de tarjeta válido.");
        return //en una función siempre hay return aunque no se vea, corta el funcionamiento
    }

    let validacion = validator.isValid(numeroTarjeta); //retorna verdadero o falso
    //alert(validacion)

    if (validacion == false) {  //tiene el resultado de validator == compara === valor y tipo de datos el mismo 
        alert("Revisa tus datos nuevamente.");
    } else {
        alert("Información" + validator.maskify(numeroTarjeta) + " ingresada correctamente.")
    }
}

//se toma de estructura anterior 
let pagar = document.getElementById("botonFinalizar")
pagar.addEventListener("click", confirmacionTarjeta)
