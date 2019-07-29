var arrayWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var arrayNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arraySymbol = ['#', '$', '%'];

var james = document.getElementById("bVerifier");
var historialOP = document.getElementById("historialOP");
var a;
function logicV() {
    var finalizar = true;
    var iden = true;
    var num = true;
    var numer = true;
    var sym = true;

    if (finalizar == true && iden == true) {
        isIdentifier();
    }
    if (finalizar == true && num == true) {
        isNumber();
    }
    if (finalizar == true && numer == true) {
        isNumberError();
    }
    if (finalizar == true && sym == true) {
        isSymbol();
    }
}
function jara() {
    historialOP.innerHTML = historialOP.innerHTML + james.value + a + '<br>';
}

function isIdentifier() {
    for (var i = 0; i < james.value.length; i++) {
        for (var j = 0; j < arrayWord.length; j++) {
            for (var m = 0; m < arrayNumber.length; m++) {
                if (james.value[0] == arrayWord[j] && (james.value[i] == arrayNumber[m] ||
                    james.value[i] == arrayWord[j])) {
                    a = ' Identifier';
                    alert("It's an Identifier " + james.value);
                    jara();
                    finalizar == false;
                    numer == false;
                    sym == false;
                
                }
            }
        }
    }
}
function isNumber() {
    for (var i = 0; i < james.value.length; i++) {
        for (var j = 0; j < arrayNumber.length; j++) {
            for (var m = 0; m < arrayWord.length; m++) {    
                if (james.value[0]==arrayNumber[j]||(!(james.value[i]==arrayWord[m]))){
                    a = ' Number';
                    alert("Number " + james.value);
                    jara();
                    finalizar == false;
                    numer == false;
                    sym == false;
                    iden == false;
                }
            }
        }
    }
}
function isNumberError() {
    for (var i = 0; i < james.value.length; i++) {
        for (var j = 0; j < arrayNumber.length; j++) {
            for (var m = 0; m < arrayWord.length; m++) {
                if (james.value[0] == arrayNumber[j]&&
                    james.value[i] == arrayWord[m]
                    &&!james.value[i] == arrayNumber[j]){
                    a = ' Error'.fontcolor("red");
                    alert("Error " + james.value);
                    jara();
                    finalizar == false;
                    num == false;
                    iden == false;
                    sym == false;
                }
            }
        }
    }
}
function isSymbol() {
    for (var i = 0; i < james.value.length; i++) {
        for (var j = 0; j < arraySymbol.length; j++) {
            if (james.value[i] == arraySymbol[j]) {
                a = ' Symbol';
                alert("It's a Symbol " + james.value);
                jara();
                finalizar == false;
                num == false;
                iden == false;
                numer == false;
            }
        }
    }
}