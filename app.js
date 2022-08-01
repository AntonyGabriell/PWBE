console.log('-- CALCULADORA SIMPLES -- \n      ');

//Import da biblioteca de entrada de dados
var readline = require('readline');
const { Z_PARTIAL_FLUSH } = require('zlib');


//Instancia do objeto entradaDados
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


//Entrada do valor 1
entradaDados.question('Digite o primeiro numero: \n', function (valor1){
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);

    //typeof -- varifica qual o tipo de dados de uma variavel ou objeto
 
    entradaDados.question('Digite o segundo numero: \n', function (valor2){
        let numero2 = parseFloat(valor2);

    
        entradaDados.question('Escolha a operacao a ser calculada: somar[+], subtrair[-], multiplicar[*], dividir[/] \n', function(opcao){
            //Declarando a variavel que vai receber o tipo de operaco matematica e convertendo o texto digitado em maiusculo.
            //toUpperCase() -- converte em MAIUSCULO
            //toLowerCase() -- converte em minusculo
            let operacao = opcao.toUpperCase();
            let resultado;

            //Chama a funcao que realizara os calculos
            if (resultado = calcular(numero1, numero2, operacao))
            {
                console.log('O resultado é: ' + resultado);
            }
            
       });
    });
 });


 //Método tradicional de se criar uma função
 function calcular(valor1, valor2, opcaoCalculo)
 {

    //Criando variaveis locais para receber o conteudo dos argumentos
    //que foram encaminhados na function

    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    // isNaN () -- funcao para validar se o conteudo de uma variavel eh numero ou nao
    if(isNaN (numero1) || isNaN (numero2))
    {
        console.log('ERRO: Apenas numeros inteiros ou reais sao aceitos');
        erro = true;
    }else
    {

    if(operacao == 'SOMAR' || operacao == '+'){
        
        resultado = numero1 + numero2;
    }else if (operacao == 'SUBTRAIR' || operacao == '-'){
        
        resultado = numero1 - numero2;
    }else if (operacao == 'MULTIPLICAR' || operacao == '*'){
        
        resultado = numero1 * numero2;
    }else if (operacao == 'DIVIDIR' || operacao == '/'){
        
        resultado = numero1 / numero2;
    }else
    {
        console.log('ERRO: operacao invalida'); 
        erro = true;
    }
    }
    
    if(erro){
    return false;   
    }else{
        return resultado;
    }                                                                                                                                                                                                                                                                                                                                  
 }