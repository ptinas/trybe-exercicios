
let elementBody = document.getElementsByTagName('body');
let textTag = document.createElement('h1');
textTag.innerHTML = 'TrybeTrip - Agência de Viagens'
elementBody[0].appendChild(textTag);

let tagMain = document.createElement('main');
tagMain.className = 'center-content';
elementBody[0].appendChild(tagMain);

let tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

let tagParagraph = document.createElement('p');
tagParagraph.innerText = 'Irei redefinir :)';
tagSection.appendChild(tagParagraph);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
tagMain.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
tagMain.appendChild(rightSection);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image'
leftSection.appendChild(image);
/*

Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no 
passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section 
criado no passo 6;
Adicione 3 tags h3, todas filhas do main criado no passo 2.
*/
