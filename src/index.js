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

//Pasa cada elemento por el evento click llamando a la función repeat

let volver = document.getElementsByClassName("volver")
Array.from(volver).forEach((element) => { element.addEventListener("click", repeat) })



//JS input Número de Tarjeta
//blur detecta la perdida de foco en el input

document.getElementById("clickTarjeta").addEventListener("blur", myFunction)
function myFunction() {
    let numero = document.getElementById("cardNumber").value;

    if (isNaN(cardNumber) || (cardNumber == "")) {
        document.getElementById("error").innerHTML = "Debe ingresar un número";
        document.getElementById("cardNumber").value = "";
    }

    else {

        let validator = validator.isvalid(cardNumber);
        if (validator == true) {

            document.getElementById("error").style.color = "#a5e9e9";
            document.getElementById("error").innerHTML = "Datos ingresados correctamente";
        }

        else {
            document.getElementById("error").style.color = "#db6060";
            document.getElementById("error").style.color = "Datos inválidos";
        }

        let resultado = validaor.maskify(cardNumber);
        document.getElementById("cardNumber").value = resultado;
    }
}

