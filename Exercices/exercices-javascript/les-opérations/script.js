//Insérez ici les exercices 2.1 à 2.4

// Exercice 2.1

function carre(a) {
  return a * a;
}
console.log(carre(2));
console.log(carre(4));
console.log(carre(8));
console.log(carre(16));

//Exercice 2.2

function divisionByTwo(c) {
  let b = 2;
  return c % b;
}
console.log(divisionByTwo(3));
console.log(divisionByTwo(178));
console.log(divisionByTwo(65));
console.log(divisionByTwo(98));
console.log(divisionByTwo(123));

//Exercice 2.3

function discountLamp(e) {
  let price = 79.99;
  let discount = 0.19;
  return price - price * discount;
}
console.log(discountLamp(79.99));

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;

//Exercice 2.4
function divisionByFirstNumber() {
  return (firstNumber /= f);
}
console.log(3);

//Exercice 2.5

function reassign() {
  let h = firstNumber + secondNumber;
  return (h += secondNumber);
}
console.log(reassign());

// Exercice 2.6

function reassignResult() {
  let result = firstNumber * thirdNumber;
  return (result += thirdNumber);
}
console.log(reassignResult());

// Exercice 2.7
// Soustrayez la variable firstNumber de votre fichier script.js à la variable fourthNumber et réassignez le résultat à fourthNumber, imprimez la dans votre console

function reassignResult2() {
  let result2 = firstNumber - fourthNumber;
  return (result2 += fourthNumber);
}
console.log(reassignResult2());

//Exercice 2.8
// Au click sur ce bouton, incrémentez la variable incrementCounter et affichez le résultat dans votre console

// Exercice incrémentation
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      console.log(++incrementCounter);
      console.log('Incrémentez');
    });
}
// Exercice décrémentation
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;
      console.log(--decrementCounter);
      console.log('Décrémentez');
    });
}
