//preguntar por los ingresos
var income = prompt("¿Cuánto es el ingreso?");//400
//costo
var costs = prompt("¿Cuánto es el costo?");//65
//Porcentaje de impuestos
var taxPercent = prompt("¿Cuánto es el Porcentaje(%) de impuestos?");//18%
//La ganancia bruta
var grossProfit = income-costs;//335
//obteniendo cantidad de impuestos
var tax = grossProfit*taxPercent/100;//60.3
//ganancia neta
var netIncome= grossProfit-tax;
//mostrando ganancia neta
document.write("Tu ganancia neta es $ " + netIncome);
