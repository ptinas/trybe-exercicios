// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");


function usePreventElement(evento) {
    evento.preventDefault()
}
hrefLink.addEventListener('click', usePreventElement)
/*
Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault para prevenir o comportamento 
padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir 
o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
*/