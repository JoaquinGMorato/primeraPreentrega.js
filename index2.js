let nombre = document.querySelector("#name");

nombre.addEventListener("input", function (event) {
    nombre = event.target.value;
});

let contraseña = document.querySelector("#password");

contraseña.addEventListener("input", function (event) {
    contraseña = event.target.value;
});

let usuario = {
    nombre: "Juan",
    contraseña: "123456",
};

let mostrador = document.querySelector("#mostrador")

let montos = [
    {
        monto: 1000,
        id: monto1
    },
    {
        monto: 10000,
        id: monto2,
    },
    {
        monto: 100000,
        id: monto3
    },
    {
        monto: 1000000,
        id: monto4
    },
];


let cuotas = [
    {
        cuotas: 1,
        interes: 10,
        id: cuotas1
    },
    {
        cuotas: 3,
        interes: 30,
        id: cuotas2
    },
    {
        cuotas: 6,
        interes: 20,
        id: cuotas3
    },
    {
        cuotas: 12,
        interes: 100,
        id: cuotas4
    },
];

let mostrarMontos = function () {
    montos.forEach(el => {
        form.innerHTML += `<div> Prestamo de $ ${el.monto} <button id="${el.id}">Seleccionar</button></div>`;
    })
};
let mostrarCuotas = function () {
    cuotas.forEach(el => {
        form.innerHTML += `<div>${el.cuotas} cuotas con ${el.interes} % de interes <button id="${el.id}">Seleccionar</button></div> </div>  `;
    })
};



let botonInicio = document.querySelector("#botonInicio");

let form = document.querySelector("#app");

botonInicio.addEventListener("click", function (event) {
    event.preventDefault();

    if (usuario.contraseña == contraseña && usuario.nombre == nombre) {
        form.innerHTML = `<div>Bienvenido ${usuario.nombre}</div>`;
        mostrarMontos();
        mostrarCuotas();
        form.innerHTML + <button id="comparar">Comparar</button>
    }
    else {
        form.innerHTML = "<div>Sus usuario o contraseña son incorrectos</div>";
    }
})

let seleccionados = [];

let botones = document.querySelector("button");

botones.forEach(boton => {
    boton.addEventListener("click", function () {
        let id = boton.getAttribute("id");
        seleccionados.push(id);
    });
});

let seleccionCuotas = [];

let mostrarSelecionados = function () {

    comparar.addEventListener("click", function () {
        
        seleccionados.forEach(id => {


            let cuota = cuotas.find(c => `boton${c.cuotas}` === id);

            if (cuota) {
                seleccionCuotas.push(cuota);
            }
        });

        if (seleccionCuotas.length > 0) {
            form.innerHTML = "";
            seleccionCuotas.forEach(cuota => {
                form.innerHTML += `<div>${cuota.cuotas} cuotas con ${cuota.interes}% de interés</div>`;
            });
        } else {
            form.innerHTML = "<div>No se encontraron cuotas seleccionadas.</div>";
        }
    })
};