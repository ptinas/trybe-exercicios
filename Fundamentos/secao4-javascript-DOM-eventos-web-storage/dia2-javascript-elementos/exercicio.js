// Acesse o elemento where-are-you.
// Acesse parent a partir de where-are-you e adicione uma color a ele.
// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
// Acesse o first-child a partir de parent.
// Acesse o first-child a partir de where-are-you.
// Acesse o texto Attention! a partir de where-are-you.
// Acesse o third-child a partir de where-are-you.
// Acesse o third-child a partir de parent.

const firstRequirement = document.getElementById('where-are-you');
// console.log(document.getElementById('where-are-you'));
const secondRequirement = firstRequirement.parentNode;
secondRequirement.style.color = 'black';

const thirdRequirement = document.getElementById('first-child-of-child');
thirdRequirement.innerText = 'Teste'

const fourthRequirement = document.getElementById('parent');
const parentChild = fourthRequirement.firstElementChild;

const fifthRequirement = document.getElementById('where-are-you');
const childParent = fifthRequirement.previousElementSibling;

const sixthRequirement = document.getElementById('where-are-you');
const parentOfChild = sixthRequirement.nextSibling;
// const childText = parentOfChild.innerText;

const seventhRequirement = document.getElementById('where-are-you');
const firstChild = seventhRequirement.nextElementSibling;

const eighthRequirement = document.getElementById('parent');
const fourthChild = eighthRequirement.lastElementChild;
const thirdChild = fourthChild.previousElementSibling;