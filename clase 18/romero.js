/* 
ejercicio 3

let letra
function Vocales() {
    for (i=0; i>=0; i++) {
        letra=prompt("ingrese letras. para terminar presione la tecla espacio.");
        if (letra=="a" || letra=="A" || letra=="e" || letra=="E" || letra=="i" || letra=="I" || letra=="o" || letra=="O" || letra=="u" || letra=="U") {
            document.getElementById("rta").textContent=("es una vocal.")
        } else {
            if (letra===" ") {
                i=-2
            } else {
                document.getElementById("rta").textContent=("no es una vocal.")
            }
        }
    } 
}


ejercicio 4

let sueldo=1500;
let incremento=0;
function Salario () {
    for (i=1; i<=6; i++) {
        incremento=sueldo*0.10
        sueldo=sueldo+incremento
        document.write("el salario del año "+i+" es: "+sueldo+"<br>")
    }
}
*/