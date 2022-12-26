const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('res');
let classificacao = ''

function calcular() {
    if(altura.value == 0 || peso.value == 0 ){
        alert('Por favor digite um número!');

    }if (altura.value !== '' && peso.value !== ''){        
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        if (imc < 18.5){
            classificacao = 'Abaixo do Peso.'
     }else if (imc > 18.5 && imc < 24.99){
        classificacao = 'Peso Normal.'
     }else if (imc >= 25 && imc < 29.99){
        classificacao = 'Sobrepeso.'
     }else if (imc >= 30 && imc < 34.99){
        classificacao = 'Obesidade Grau 1.'
     }else if (imc >= 35 && imc < 39.99){
        classificacao = 'Obesidade Grau 2.'
     }else{
        classificacao = 'Obesidade Grau 3.'
     }

     resultado.innerHTML = `Seu IMC é : ${imc} (${classificacao})`
    }
}