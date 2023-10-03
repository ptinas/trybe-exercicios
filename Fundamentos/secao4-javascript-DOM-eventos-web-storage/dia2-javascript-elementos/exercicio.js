
let elementBody = document.getElementsByTagName('body');
let textTag = document.createElement('h1');
textTag.innerHTML = 'TrybeTrip - Agência de Viagens'
textTag.className = 'title';
elementBody[0].appendChild(textTag);

let tagMain = document.createElement('main');
tagMain.className = 'center-content';
elementBody[0].appendChild(tagMain);

let tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagSection.style.backgroundColor = '#a5be00';
tagMain.appendChild(tagSection);

let tagParagraph = document.createElement('p');
tagParagraph.innerText = 'Irei redefinir :)';
tagSection.appendChild(tagParagraph);

let leftSection = document.createElement('section');
leftSection.className = 'left-content';
tagMain.appendChild(leftSection);
const rmLeftContent = document.getElementsByClassName('left-content')[0];
tagMain.removeChild(rmLeftContent);

let rightSection = document.createElement('section');
rightSection.className = 'right-content';
rightSection.style.marginRight = '600px';
rightSection.style.marginLeft = '600px';
rightSection.style.textAlign = 'center';

tagMain.appendChild(rightSection);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image'
leftSection.appendChild(image);

let numberList = [
    'Um',
    'Dois',
    'Três',
    'Quatro',
    'Cinco',
    'Seis',
    'Sete',
    'Oito',
    'Nove',
    'Dez'
];
let list = document.createElement('ul');
for (let index = 0; index < numberList.length; index += 1) {
    let li = document.createElement('li');
    li.innerText = numberList[index];
    list.appendChild(li);
}
rightSection.appendChild(list);
list.lastChild.remove();
list.lastChild.remove();

for (let index = 0; index < 3; index += 1) {
    let tagH3 = document.createElement('h3');
    tagH3.innerHTML = index;
    tagMain.appendChild(tagH3);
    tagH3.className = 'description';
}