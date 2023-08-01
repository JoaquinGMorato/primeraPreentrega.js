
alert("Bienvenido a Prestamos Pepito")

const cliente = {
    nombre: "",
    edad: 0,
    contraseña: "",
    monto: 0,
    cuotas: 0,
}

let nombre = prompt("Por favor ingrese su nombre");

cliente.nombre = nombre

let edad = prompt("Hola " + nombre + " por favor ingrese su edad");

cliente.edad = edad

let contrasena = prompt("Ingrese su contraseña");

cliente.contraseña = contrasena

let verficacionContrasena = prompt("Verifique su contraseña");

while (contrasena != verficacionContrasena) {

    alert("Su contraseña no ha podido se verificada");

    verficacionContrasena = prompt("Verifique su contraseña")
};

alert("Su contraseña ha sido verificada");

let sumaDinero = 0;

const opcionesCuotas = [
    {
        cuotas: 3,
        interes: 0.6,
    },
    {
        cuotas: 6,
        interes: 1.6,
    },
    {
        cuotas: 12,
        interes: 2.2,
    },
]


let mensajeCuotas = " Elegi la opcion que mas te convenga indicando el numero de cuotas : \n"
opcionesCuotas.forEach(el => {
    mensajeCuotas += `${el.cuotas} cuotas con ${el.interes} de interés. \n`;
});

let cuota = 0
let aPagar= 0
let cuotas = 0

function calculadora(operacion) {

    


    switch (operacion) {
        case 3:
            aPagar = sumaDinero * (opcionesCuotas[0].interes + 1) 
            cuota = aPagar / operacion;
            alert("Usted debera abonar 3 cuotas de " + cuota);
            break;
        case 6:
            aPagar = sumaDinero *  (opcionesCuotas[1].interes + 1)
            cuota = aPagar / operacion;
            alert("Usted debera abonar 6 cuotas de " + cuota);
            break;
        case 12:
            aPagar = sumaDinero *  (opcionesCuotas[2].interes + 1)
            cuota = aPagar / operacion;
            alert("Usted debera abonar 12 cuotas de " + cuota);
            break;

        default: alert("No selecciono las cuotas correctamente, por favor vueleva  a generar el prestamo");
            break;}

            
    }

    if (edad < 18) {
        let mayorEdad = 18 - edad
        alert(nombre + " no tenes edad suficiente para seguir operando, te esperamos en " + mayorEdad + " años")
    }

    else {
        sumaDinero = parseInt(prompt("Ingresa cuanto Dinero queres para tu prestamo, tenes autorizado hasta 100000"));
        cliente.monto = sumaDinero;
        if (sumaDinero > 100000) {
            alert("No estas autorizado para pedir ese monto");
        }
        else {
            cuotas = parseInt(prompt(mensajeCuotas));
            calculadora(cuotas);
            cliente.cuotas = cuotas;

            alert(`Gracias por operar con nosotros.\nLos datos de la operacion son: \n Nombre: ${cliente.nombre} \n Edad: ${cliente.edad} \n Contraseña: ${cliente.contraseña} \n Monto Pedido: ${cliente.monto}\n Monto a abonar: ` + aPagar + `\n Cuotas: ${cliente.cuotas}\n Usted abonara un total de ` + aPagar + " en " + cuotas + " cuotas de " + cuota);
        }
    }
