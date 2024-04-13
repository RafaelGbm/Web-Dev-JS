var resultado = document.getElementById('resultado')

function somar(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
var soma = n1 + n2;
   console.log(typeof soma);
   console.log(soma);
   resultado.innerText = `O resultado da soma é: ${soma}`
}
   function sub(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
var soma = n1 - n2;
   console.log(typeof soma);
   console.log(soma);
   resultado.innerText = `O resultado da subtração é: ${soma}`
}

function mult(){
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
var soma = n1 * n2;
   console.log(typeof soma);
   console.log(soma);
   resultado.innerText = `O resultado da multiplicação é: ${soma}`
}


function div() {
    var n1 = parseFloat(document.getElementById('number1').value);
    var n2 = parseFloat(document.getElementById('number2').value);
    if(n2 === 0){
        resultado.innerText = "Erro: divisão por zero";
    }
    else if(isNaN(n2)){

    }
    else {
        resultado.innerText = n1 / n2;
    }
    
}
