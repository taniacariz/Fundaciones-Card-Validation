
//Funcion desde Home a Página Hotel

let inicio = document.getElementById("siguientePaginaHotel")
inicio.addEventListener("click", nextPageOne)

function nextPageOne(){
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPaginaHotel").style.display = "block";
    document.getElementById("tercerPaginaHotel").style.display = "block";
    document.getElementById("cuartaPaginaHotel").style.display = "block";
}
 
//Funcion Página Hotel a Donar

let donar = document.getElementById("donarCasita")
donar.addEventListener("click", nextPageTwo)

function nextPageTwo(){
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "block";
    document.getElementById("cuartaPaginaHotel").style.display = "block";
}

//Funcion Donar a Datos Tarjeta

let pagar = document.getElementById("botonFinalizar")
pagar.addEventListener("click", nextPageTree)

function nextPageTree(){
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "block";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "block";
}

//Funcion Gracias

let volver = document.getElementById("volverInicio")
volver.addEventListener("click", repeat)

function repeat(){
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "block";
    document.getElementById("tercerPaginaHotel").style.display = "block";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}
 

//let atras = document.getElementById("botonAtras")
//atras.addEventListener("click", () => {
   // history.go(-1);
 // });
