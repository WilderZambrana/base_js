const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");
 
form.addEventListener("submit", (event) => {
  if(edad.value > 30) {
    alert("Hola señor(a) " + nombre.value);
  } else {
    alert("Hola " + nombre.value);
  }  
});