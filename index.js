
alert("Bienvenido a Prestamos Pepito")

let nombre = prompt("Por favor ingrese su nombre");

let edad = prompt("Hola " + nombre + " por favor ingrese su edad");

let sumaDinero = 0;

function calculadora(operacion) {

    let cuota = 0


    switch (operacion) {
        case 3:
            aPagar = sumaDinero * 1.3
            cuota = aPagar / 3;
            alert("Usted debera abonar 3 cuotas de " + cuota);
            break;
        case 6:
            aPagar = sumaDinero * 1.6
            cuota = aPagar / 6;
            alert("Usted debera abonar 6 cuotas de " + cuota);
            break;
        case 12:
            aPagar = sumaDinero * 2.2
            cuota = aPagar / 12;
            alert("Usted debera abonar 12 cuotas de " + cuota);
            break;
    
        default: alert("NO selecciono las cuotas correctamente, vuleva  agenerar el prestamo");
            break;
    }
    alert("Gracias por operar con nosotros");
}

if (edad < 18) {
    let mayorEdad= 18 - edad
    alert( nombre + " no tenes edad suficiente para seguir operando, te esperamos en " + mayorEdad + " años")
}

else {
    sumaDinero = parseInt(prompt("Ingresa cuanto Dinero queres para tu prestamo, tenes autorizado hasta 100000"));
    if (sumaDinero > 100000) { alert("No estas autorizado para pedir ese monto") }
    else {
        let cuotas = parseInt(prompt("Elija la cantidad de cuotas a abonar de las siguiente opciones. 3, 6 o 12 recuerde que el interes varia segun la cantidad seleccionada "));
        calculadora(cuotas)
    }
}