                               //querySelector
//te va a renotar ya sea ninguna o hasta un elemento que concuerde con el selector que estas escribiendo
                //document hace referencia a todo el documento que tenemos en html
const heading = document.querySelector(".header__texto h2")// renorta 0 o 1
heading.textContent = "Nuevo Heading" 
heading.classList.add("nueva-clase")//este agrega una nueva clase 

//querySelectorALL
//a diferencia de querySelector este renorna a todos los elementos que concuerde con el selector

const enlaces = document.querySelectorAll(".navegacion a");
 console.log(enlaces[0]); //asi llamo a uno en especifico, como en los arreglos 
console.log(enlaces);
// enlaces[0].textContent = "nuevo texto para enlace";
// enlaces[0].href = "http://www.google.com"//para cambiar el enlace 
// enlaces[0].remove("navegacion_enlace");//este remueve las clases

//getElementById
//const heading2 = document.getElementById("heading");
//console.log(heading2)

//GENERAR UN NUEVO ENLACE 
const nuevoEnlace = document.createElement("A");
//agregar el href
nuevoEnlace.href = "nuevo-enlace.html";
//agregar el texto
nuevoEnlace.textContent = "Un nuevo enlace";
//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
//agregarlo en el doocumento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);


                   // EVENTOS
window.addEventListener("load", function () {//con el load le decismooos que espere hasta que a pagina cargue 
    console.log(2);
});

window.onload = function () {
    console.log(3);
}

document.addEventListener("DOMcontentloaded", function () {//solamente espera a que carge e html y por eso sale uno de los primero, n e imprta si aun noo ha descargadoo css
    console.log(4);
});
console.log(5);

// window.onscroll = function() {//eso es para ver cuanto escroll ha hecho 
//     console.log("scrolling...");
// }

// SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO 
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function(evento){
    // evento.preventDefault();//esto es para prevenir el evento predeterminado 
//validar un formulario 
console.log("enviando formulario");
});



//Eventos de los inputs y textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");//el submit esta asociado al formulario 

nombre.addEventListener("input",leertexto);
email.addEventListener("input",leertexto);
document.addEventListener("input",leertexto);
//el evento de Submit
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    //validar el formulario 

    const {nombre, email, mensaje} = datos;
     if (nombre == "" ||  email == "" || mensaje == ""){
        mostrarAlerta("Todos los campos son obligatorios",true);
        // return; //return corta la ejecucion del codigo
     }else{ 
        mostrarAlerta("Mensaje enviado");
     }


    //Enviar el formulario 

     console.log("enviando formulario ")

});

function leertexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    console.log(datos);
}


function mostrarAlerta(mensaje, error = null) {
    const alerta =document.createElement("P");
    alerta.textContent = mensaje;

    if(error == true){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("enviado");
    }
    formulario.appendChild(alerta);
     //desaparezca despues de 3 segundos 
     setTimeout(() => {
        alerta.remove();//es un metdo para poder eliminar un elemento del html
    }, 3000);
}

