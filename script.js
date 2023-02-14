alert("Bienvenido a la Calculadora Restaurante®")


function comida() {
let primervalor = parseInt(prompt("Cuanto fue el gasto total?"));
if (primervalor < 50) [
    alert("Comiste pan y te fuiste?")
]
let segundovalor = parseInt(prompt("Cuantas personas comieron?"));
if (segundovalor < 2 ) {
  alert("Para que utilizas esto?")

}

 let resultadodivision = Math.round((primervalor / segundovalor));
alert("Cada uno de ustedes debe pagar " + resultadodivision + " Pesos/Dolares");

}

function propina() {

 let valorp = parseInt(prompt("Cuanto fue el gasto total?"))
 let valorf = parseInt(prompt("En escala del 10 al 40 que tan bueno estuvo el servicio?"))
 if (valorf < 10) {
     alert("Eres tonto?")
 }
 if (valorf > 40)
 alert("No sabes leer?")

let resultadopropina = (valorp *= valorf);
let finalpropina = (resultadopropina / 100 );
alert("La propina es de " + finalpropina + " Pesos/Dolares");








 }

