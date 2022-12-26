
//Inserindo elementos ao clique dos botões
function insert(num){ 
    // chamando os botões com a classe ('.botão').
    let botoes = document.querySelectorAll('.botao'); 

    //chamando paragrafo com o id ('res').
    let resultado = document.getElementById('res').innerHTML; 

    // Dentro de ('res') exibe o que estiver no insert (num). 
    document.getElementById('res').innerHTML = resultado + num;  

}

// Passar para o ('res') um campo vazio para limpar ao clique do botão "C".
function limpar() {
    document.getElementById('res').innerHTML = " "
}

// Apagando numeros com o botão <.
function apagar() {
    // Criar nova variável "valores" por exemplo, Que recebe ('res').    
    let valores = document.getElementById('res').innerHTML; 

    // Chamar ('res') que passa a receber (valores.substring) e a partir de zero(posição), pega o comprimento(length) da variável valores, e subrai 1.
    document.getElementById('res').innerHTML = valores.substring(0, valores.length -1);   

}

//Calcular números digitados no parágrafo ('res')
function calcular() {
    // Declarar a mesma variável que foi escrita na função insert.Pois como ela está em outro escopo, precisa ser declarada novamente para ser usada nessa função.
    let resultado = document.getElementById('res').innerHTML; 

    // Se tiver algo escrito em (resultado).
    if(resultado){
        // Chamar ('res') que receberá eval (resultado)
        document.getElementById('res').innerHTML = eval(resultado) 
    }
}