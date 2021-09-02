const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const state = document.querySelector('#state');
const formT = document.querySelector("#totalizador-form");

formT.addEventListener("submit", (event) => {
    event.preventDefault();
    let totalMult = precioTotal(cantidad.value, precio.value);
    let totalConIm=ImpFORstate(state.value);
    document.getElementById('total').innerHTML = totalMult;
    document.getElementById('totalConImpuesto').innerHTML = totalConIm;
    //alert("Cantidad: " + cantidad.value+" Precio: "+precio.value+"total: "+totalMult);


});

function precioTotal(cantidad, precio) {
    let res = cantidad * precio;
    return res;
}

function ImpFORstate(valueState) {
    let valorImpuestos=0;
    let res = precioTotal(cantidad.value, precio.value);
    switch (valueState) {
        case 'UT':
            valorImpuestos = 0.0665;
            break;
        case 'NV':
            valorImpuestos = 0.08;
            break;
        case 'TX':
            valorImpuestos = 0.0625;
            break;
        case 'AL':
            valorImpuestos = 0.04;
            break;
        case 'CA':
            valorImpuestos = 0.0825;
            break;
        default:
            alert("No existe");
    }
    res = res + (res * valorImpuestos);
    return res;
}
//Falta que se muestre 
//Cual es el link del repositorio? :'v ahor