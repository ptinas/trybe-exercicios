// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

// let Maria = 90;
// let Fernando = 50;
// let Joana = 70;
// let message

// if (Maria > Fernando && Maria > Joana) {
//   message = "Maria possui mais maçãs!"
// } else if (Fernando > Joana && Fernando > Maria) {
//  message = "Fernando possui mais maçãs!"
// } else if (Joana > Fernando && Joana > Maria) {
//   message = "Joana possui mais maçãs!"
// } else {
//   message = "Eles dividiram as maçãs entre si em partes iguais!"
// }

// console.log(message);

// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem 
// os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// let angulo1 = 30;
// let angulo2 = 90;
// let angulo3 = 60;
// let message

// if (angulo1 + angulo2 + angulo3 === 180) {
//   console.log(true)
// } else {
//    console.log(false)
// }

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.


let player = "Cavalo";
let message

switch (player) {
    case "Torre": message = "Torre: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
        break;
    case "Dama": message = "Dama: Move-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.";
        break;
    case "Rei": message = "Rei: Move-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.";
        break;
    case "Bispo": message = "Bispo: Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.";
        break;
    case "Cavalo": message = "Cavalo: Salta sobre outras peças no tabuleiro, sejam elas amigas ou inimigas. Pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.";
        break;
    case "Peão": message = "Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.";
        break;

    default: message = "Erro."
}
console.log(message)