//palabra reservada para este archivo function
function promediodedosnotas(nota1,nota2){
    //calculamos el promedio de las dos notas y lo devolvemos con return
    return (nota1 + nota2)/2;
}
//para usarla , devemos llamarlos y guardarlo en los siguientes variables
const promediofinal=promediodedosnotas(50,90)
//mostramos el resultado con el siguiente codigo de mostrar console.log(mensaje ${promediofinal});
console.log(`el promedio final de las dos notas sumada es: ${promediofinal}`);