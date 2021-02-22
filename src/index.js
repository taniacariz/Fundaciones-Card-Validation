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

let pagar = document.getElementById("botonFinalizar")
pagar.addEventListener("click", nextPageTree)

function nextPageTree() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "block";
}

//Funcion Gracias

function repeat() {
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}

//Transformar el objeto de objetos volver en un arreglo de objetos 
//y por cada elemento agrega el evento click llamando a la función repeat

let volver = document.getElementsByClassName("volver")
Array.from(volver).forEach((element) => { element.addEventListener("click", repeat) })