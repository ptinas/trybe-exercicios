/*
Crie um irmão para elementoOndeVoceEsta.
Crie um filho para elementoOndeVoceEsta.
Crie um filho para primeiroFilhoDoFilho.
A partir desse filho criado, acesse terceiroFilho.

*/
let elementoSibling = document.createElement('li')
elementoSibling.innerHTML = '<b>Deu certo!</b>';
let elementoPai = document.getElementById('pai');
elementoPai.appendChild(elementoSibling);

// console.log(elementoSibling);

let elementoChildren = document.createElement('li')
elementoChildren.innerHTML = '<b>Deu certo também :)</b>';
let fatherElement = document.getElementById('elementoOndeVoceEsta');
fatherElement.appendChild(elementoChildren);

let childrenPrimeiro = document.createElement('p')
childrenPrimeiro.innerText = 'Joinha';
let elementFather = document.getElementById('primeiroFilhoDoFilho');
elementFather.appendChild(childrenPrimeiro);

let textJoinha = document.getElementsByTagName('p');
let fatherPrimeiro = textJoinha[0].parentNode.parentNode.parentNode;
let thirdChild = fatherPrimeiro.children[2];
