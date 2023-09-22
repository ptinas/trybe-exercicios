// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
//  Some todos os valores contidos no array e imprima o resultado.
// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior 
// que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// Utilizando for, descubra o maior valor contido no array e imprima-o.
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media = 0;
let message
let higherNumber = numbers[0];
let modulo = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    result += numbers[index];
    media = result / numbers.length;
}

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
};

if (media > 20) {
    message = "O valor da média aritmética é maior que 20.";
} else {
    message = "O valor da média aritmética é menor ou igual a 20.";
}

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        modulo +=1;
    }
}

if (modulo === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(`São ${modulo} números ímpares.`);
}



console.log(`A soma de todos os valores é: ${result}.`);
console.log(`A media aritmética dos valores é: ${media}.`);
console.log(message);
console.log(`O maior número é: ${higherNumber}.`);
