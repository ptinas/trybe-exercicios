//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. 
// Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber'.split("").reverse();
// console.log(word);

// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

// let numero = 5;
// let asterisco = "*";
// let linha = " ";

// for (let index = 0; index < numero; index +=1) {
//    linha = linha + asterisco;
// }

// for (let index = 0; index < numero; index +=1) {
//  console.log(linha);
// }

// Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

let numero = 5;
let asterisco = "*";
let linha = " ";

for (let index = 0; index <= numero; index +=1) {
    linha = linha + asterisco;
    console.log(linha);

}
