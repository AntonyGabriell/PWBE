console.log('-- CALCULADORA SIMPLES -- \n      ');

const {calcular} = require('./modulos/calculadora.js')
//Import da biblioteca de entrada de dados
var readline = require('readline');


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


 