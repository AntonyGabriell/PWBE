/**************************************

* Obejtivo: Arquivo que contém todas as funcoes para calculos matematico
* Autor: Antony Gabriel
* Data Criaçao: 01/08/2022
* Ultima atualizacao: 01/08/2022
* Autor: Antony
* Finalidade: funcao
* Versão 1.0

****************************************/





//Método tradicional de se criar uma função
const calcular = function(valor1, valor2, opcaoCalculo)
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
       
       resultado = somar(numero1, numero1)
   }else if (operacao == 'SUBTRAIR' || operacao == '-'){
       
       resultado = subtrair(numero1, numero2)
   }else if (operacao == 'MULTIPLICAR' || operacao == '*'){
       
       resultado = multiplicar(numero1, numero2)
   }else if (operacao == 'DIVIDIR' || operacao == '/'){
       
       resultado = dividir(numero1, numero2)
   }else
   {
       console.log('ERRO: operacao invalida'); 
       erro = true;
   }
   }
   
   if(erro){
   return false;   
   }else{
       return resultado.toFixed(2);
   }                                                                                                                                                                                                                                                                                                                                  
}

// Modelo de funcao Arrow Function
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2)
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2)
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2)
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2)

//As funcoes que serao importadas em outros projetos, precisam obrigatoriamente serem incluidas no module.exports.
//As funcoes que nao forem uncluidas no module.exports funcionaram apenas localmente neste arquivo.
module.exports = {
    calcular
}