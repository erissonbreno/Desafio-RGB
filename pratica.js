window.addEventListener('load', start);

function start(){
    console.log('Trabalho iniciado.');
}

function getRangeRedValue(){
    var get = document.querySelector('#getRed');
    console.log(get.value);
    document.querySelector('#putRed').value = get.value;
}
function getRangeGreenValue(){
    var get = document.querySelector('#getGreen');
    console.log(get.value);
    document.querySelector('#putGreen').value = get.value;
}    
    
function getRangeBlueValue(){
    var get = document.querySelector('#getBlue');
    console.log(get.value);
    document.querySelector('#putBlue').value = get.value;   
}

var input = document.querySelectorAll('input');

for (var i = 0; i < input.length; i++){
    function rgbSum(){
        var red = document.getElementById('getRed').value;
        var green = document.getElementById('getGreen').value;
        var blue = document.getElementById('getBlue').value;
        
        var display = document.getElementById('display');
        display.style.background = "rgb(" + red + "," + green + "," + blue +")";
    }
    input[i].addEventListener('input', rgbSum);
}