document.getElementById("sumar").addEventListener("click", function(){
    let numeroA = document.getElementById("numeroA").value;
    console.log("el valor del numero A es " +numeroA);

    let numeroB = document.getElementById("numeroB").value;
    console.log("el valor de numero B es " +numeroB);

    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log("el valor de la suma a + b es " + resultado);


    document.getElementById("resultado").innerHTML = resultado; 
    document.getElementById("contenedorResultado").style.display = "block";


});
function sumar(a,b){
    return a + b;
}