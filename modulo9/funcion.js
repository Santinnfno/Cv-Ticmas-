/**document.getElementById("boton").onclick = function(){
    console.log("capturamos el evento click.");
    document.getElementById("demo").innerHTML= "estamnos provando nuestro primer evento en html"


}

document.addEventListener("click", function() {
    console.log("esto es gracias al Event listener");
    document.getElementById("demo").innerHTML= "estamnos provando nuestro primer evento en html"

});*/
    
document.getElementById("boton").addEventListener ("click", function() {
    console.log("esto es gracias al Event listener");
    document.getElementById("demo").innerHTML= "estamnos provando nuestro primer evento en html"
});


document.getElementById("boton_color").addEventListener ("click", function(){
    document.body.style.backgroundColor = "#FF0000";

});


document.getElementById("boton_color2").addEventListener ("click", function(){
    document.body.style.backgroundColor = "#40ff00";

});


document.getElementById("boton_oculto").addEventListener ("click", function(){
    document.getElementById("demo").style.display = "none";

});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++){
    collection=(i).style.backgroundColor = "yellow";
}