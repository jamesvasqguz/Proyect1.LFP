var james= document.getElementById("bVerifier");
var historialOP = document.getElementById("historialOP");

function logicV(){
    for(var i=0;i<james.value.length;i++){
    console.log(james.value[i]);        
    switch(james.value[i]){
        case 'a':
            alert("El dato ingresado es una letra: " +james.value); 
        break;
        case '1':
            alert("El dato ingresado es un numero: " +james.value); 
        break;
        case '#':    
            alert("El dato ingresado es un simbolo: " +james.value); 
        break;
        default:
            alert("Error ");
        break;
        }
    } 
    historialOP.innerHTML = historialOP.innerHTML +james.value +'<br>';      
}