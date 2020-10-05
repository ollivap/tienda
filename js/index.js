
function ponFecha(){
let d = new Date();
var hora;
var mes= d.getMonth() + 1;
console.log("La fecha es: " + d.getDate() +"/"+ mes +"/"+d.getFullYear());
if(d.getHours()>12){
  hora= d.getHours()-12;
} else {
  hora= d.getHours();
}
console.log("La hora es: "+ hora +":"+d.getMinutes()+":"+d.getSeconds());
}

alert ("¡Bienvenidas mujeres emprendedoras!");
confirm("¿Deseas saber acerca de autonomía económica de las mujeres?");
var nombre=prompt("Cúal es tu nombre: ");
alert("Hola "+ nombre +" te invitamos a ser emprendedora y a desarrollar tu autonomía económica.");
