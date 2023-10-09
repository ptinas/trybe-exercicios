// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");
const selectorA = document.getElementById("selector-a");

function usePreventElement(evento) {
    evento.preventDefault()
}
hrefLink.addEventListener('click', usePreventElement)

function checkLetterA(event) {
    const letterA = event.key;
    const onlyALowCase = "a";
    if (!onlyALowCase.includes(letterA)) {
        event.preventDefault();
        alert(
            `Somente letras a minúsculas aceitas. Letra digitada: ${letterA}`
        );
    }
}
inputText.addEventListener('keydown', checkLetterA, false)