const cantidad = document.querySelector("#cantidad-input");
const price = document.querySelector("#price-input");
const formT = document.querySelector("#totalizador-form");

formT.addEventListener("submit", (event) => { 
    alert("Cantidad: " + cantidad.value);
});

//document.getElementById('card-container').innerHTML = teamContent;

/*function multiplicacion(cantidad,precio){
  let res=cantidad*precio;
  return res;
}*/