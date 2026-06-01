// Solicitamos el nombre al usuario y lo almacenamos en una constante   
const nombre = prompt("Ingrese su nombre:");

//Imprimir el saludo amable
alert("Bienvenido al sistema , " + nombre);

const apellido = prompt("Ingrese su apellido: ");

alert(nombre + " " + apellido);
/* Solicite al usuario tambien, su apellido en una nueva constante e imprima todo en un mismo saludo.

Luego, solicite al usuario su edad y almacenela en una nueva constante. Imprima un mensaje que diga "Hola [nombre] [apellido], tienes [edad] años".

Verifique si la persona es mayor de edad e imprima otra alerta donde se le indique si puede pasar o no al sistema. Para esto,
considere que la mayoria de edad es a los 18 años .*/

const edad = prompt("Ingrese su edad: ");

alert ("Hola " +  nombre + "  " + apellido + "  " + " Tienes: " + edad + " años."); 

if(edad >= 18 && edad <= 100){
    alert("Tienes mas de 18 años puedes pasar")
}
else{
    alert("No tienes 18, cierra la pagina")
}