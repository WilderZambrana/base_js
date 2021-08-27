const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const genero = document.querySelector("#genero-input");
const form = document.querySelector("#saludador-form");
 
/*form.addEventListener("submit", (event) => {
  if(edad.value > 30 ) {
    if(genero.value === "Male"){
      alert("Hola señor " + nombre.value);
    } else{
      alert("Hola señora " + nombre.value);
    }    
  } else if(edad.value > 0){
    if(genero.value === "Male"){
      alert("Hola joven " + nombre.value);
    } else{
      alert("Hola señorita " + nombre.value);
    }
  } else {
    alert("Hola " + nombre.value);
  }  
});*/
var title="";
form.addEventListener("submit", (event) => {
  if(edad.value > 30 ) {
    if(genero.value === "Male"){
      title="señor ";
    } else{
      title="señora ";
    }    
  } else if(edad.value > 0){
    if(genero.value === "Male"){
      title="joven ";
    } else{
      title="señorita ";
    }
  } else {
    title="";
  }  
  alert("Hola " + title + nombre.value);
});