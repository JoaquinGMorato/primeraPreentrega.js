
let form = document.querySelector("#app");

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
        id: "monto1",
    },
    {
        monto: 10000,
        id: "monto2",
    },
    {
        monto: 100000,
        id: "monto3",
    },
    {
        monto: 1000000,
        id: "monto4",
    },
];


let cuotas = [
    {
        cuotas: 1,
        interes: 10,
        id: "cuotas1",

    },
    {
        cuotas: 3,
        interes: 30,
        id: "cuotas2",
    },
    {
        cuotas: 6,
        interes: 20,
        id: "cuotas3",
    },
    {
        cuotas: 12,
        interes: 100,
        id: "cuotas4",
    },
];

let mostrarMontos = function () {
    let montosDiv = document.createElement("div");
    montos.forEach(el => {
        let montoDiv = document.createElement("div")
        montoDiv.innerHTML = `<div class=montoDiv > Prestamo de $ ${el.monto} <button id="${el.id}">Seleccionar</button></div>`;
        montosDiv.appendChild(montoDiv)
    }
    );
    form.appendChild(montosDiv)
};


// let mostrarCuotas = function () {
//     cuotas.forEach(el => {
//         form.innerHTML += `<div>${el.cuotas} cuotas con ${el.interes} % de interes <button id="${el.id}">Seleccionar</button></div> </div>  `;
//     })
// };

let seleccionadosId = [];
let seleccionados = [];
let seleccionadosCuotas = [];
let montFinal = [];
let cuotFinal = [];

let activarBotones = function () {

    form.addEventListener("click", function (event) {
        if (event.target.tagName == "BUTTON") {
            let id = event.target.getAttribute("id");
            seleccionadosId.push(id)
            console.log(seleccionadosId)
        }
    })
};

let mostrarSelecionados = function () {

    let comparar = document.querySelector("#comparar");

    comparar.addEventListener("click", function () {
        console.log(seleccionadosId);
        seleccionadosId.forEach(id => {

            let monto = montos.find(c => c.id === id);

            if (monto) {
                seleccionados.push(monto);
                console.log(monto)
                console.log(seleccionados)
            }
        });

        if (seleccionados.length > 0) {

            form.innerHTML = "Usted selecciono los siguentes montos";

            seleccionados.forEach(e => {
                form.innerHTML += `<div class=montosDiv >${e.monto}  pesos</div>`
            });

            cuotas.forEach(e => {

                let cuotasDiv = document.createElement("div");
                // cuotas.forEach(el => {
                let cuotaDiv = document.createElement("div")
                cuotaDiv.innerHTML = `<div >Las opciones de cuotas son: ${e.cuotas} con ${e.interes} %de interes </div><button id=${e.id}>Seleccionar</button>`;
                cuotasDiv.appendChild(cuotaDiv)
                //}

                form.appendChild(cuotasDiv)


            });
            form.addEventListener("click", function (event) {
                if (event.target.tagName == "BUTTON") {
                    seleccionadosId.forEach(id => {

                        let monto = cuotas.find(c => c.id === id);

                        if (monto) {
                            seleccionados.push(monto);
                            console.log(monto);
                            console.log(seleccionados);
                            form.innerHTML = " ";
                            seleccionados.forEach(e => {


                                if (e.monto) {

                                    seleccionados.forEach(id => {
                                        let mont = montos.find(c => c.id == id)
                                        if (mont) {
                                            montFinal.push(mont)
                                            console.log(montFinal)
                                        }
                                    })
                                    form.innerHTML += `<div >El monto seleccionado es de ${e.monto}</div>`
                                } else {
                                    form.innerHTML += `<div >La cuota selecionada es de ${e.cuotas} con ${e.interes} % de interes</div>`
                                }
                            }

                                // form.innerHTML+=`<div >Las opciones de cuotas son: ${e.cuotas} /// ${e.interes} con ${e.monto} %de interes </div><button id=${e.id}>Seleccionar</button>`
                            )
                        }
                    })


                }
            })



                // form.innerHTML += `<div >Las opciones de cuotas son: ${e.cuotas} con ${e.interes} %de interes </div><button id=${e.id}>Seleccionar</button>`;

                // let botonCuotas = form.querySelectorAll("button");

                // botonCuotas.addEventListener("click", function () {
                //     console.log("Holaaa")
                //     seleccionadosId.forEach(id => {
                //         let cuota = cuotas.find(c => c.id === id);

                //         if (cuota) {
                //             seleccionadosCuotas.push(cuota);
                //             console.log(cuota)
                //             console.log(seleccionadosCuotas)
                //         }
                //     })
                // })


                //}
                //     )
                ;

        } else {
            form.innerHTML = "<div>No se encontro monto seleccionado.</div>";
        }
    });
}




let botonInicio = document.querySelector("#botonInicio");


botonInicio.addEventListener("click", function (event) {
    event.preventDefault();

    if (usuario.contraseña == contraseña && usuario.nombre == nombre) {
        form.innerHTML = `<div>Bienvenido ${usuario.nombre}
    Selecciona el monto deseado para tu prestamo </div>`;
        mostrarMontos();
        activarBotones();
        form.innerHTML += `<button id="comparar">Comparar</button>`
        mostrarSelecionados();
    }
    else {
        form.innerHTML = "<div>Sus usuario o contraseña son incorrectos</div>";
    }
})

