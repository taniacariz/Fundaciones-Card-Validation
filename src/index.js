import validator from './validator.js';


//Funcion desde Home a Página Hotel

let inicio = document.getElementById("siguientePaginaHotel")
inicio.addEventListener("click", nextPageOne)

function nextPageOne() {
    document.getElementById("home").style.display = "none";
    document.getElementById("segundaPaginaHotel").style.display = "block";
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

function repeat() {
    document.getElementById("home").style.display = "block";
    document.getElementById("segundaPaginaHotel").style.display = "none";
    document.getElementById("tercerPaginaHotel").style.display = "none";
    document.getElementById("cuartaPaginaHotel").style.display = "none";
}

//Retornar a la primera página class="volver"

let volver = document.getElementsByClassName("volver")
Array.from(volver).forEach((element) => {
    element.addEventListener("click", repeat)
})



//Validator números tarjeta = true or false 

const confirmacionTarjeta = () => {

    let numeroTarjeta = document.getElementById("inputTarjeta").value // Valor numero de tarjeta 

    if (numeroTarjeta.length < 16 || numeroTarjeta === 0) { //alert número erróneo 
        alert("Ingresa un número de tarjeta válido.");
        return
    }
    else {
        let validacion = validator.isValid(numeroTarjeta); //retorna verdadero o falso

        if (validacion == false) {  //tiene el resultado de validator == compara === valor y tipo de datos el mismo 
            alert("Revisa tus datos nuevamente.");
            return

        } else {
            alert("Ingresado correctamente " + validator.maskify(numeroTarjeta));
            return
        }
    }
}

let prueba = document.getElementById("botonPrueba")
prueba.addEventListener("click", confirmacionTarjeta)


//return en una función siempre hay return aunque no se vea, corta el funcionamiento

