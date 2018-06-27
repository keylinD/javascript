var age = parseInt(prompt("¿Cuál es tu edad?"));//18
// convertir edad a segundos
var ageInseconds = age*365*24*60*60;
console.log(ageInseconds);
//mostrando edad en la web
document.write("Tu edad es " + age + " y en segundos seria " +ageInseconds );