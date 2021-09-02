const cantidad = document.querySelector("#cantidad-input");
const precio = document.querySelector("#precio-input");
const formT = document.querySelector("#totalizador-form");

formT.addEventListener("submit", (event) => {
    event.preventDefault();
    let totalMult = multiplicacion(cantidad.value, precio.value);
    document.getElementById('total').innerHTML = totalMult;
    //alert("Cantidad: " + cantidad.value+" Precio: "+precio.value+"total: "+totalMult);


});

function multiplicacion(cantidad, precio) {
    let res = cantidad * precio;
    return res;
}


