//Exercice 3.1

let leftNumber = 12;
let rightNumber = 29;
function smallerOrNot() {
  return rightNumber < leftNumber;
}
console.log(smallerOrNot());

//Exercice 3.2

function biggerThan10() {
  return leftNumber > 10;
}
console.log(biggerThan10());

//Exercice 3.3

//if left numer divisible par deux > afficher true, else afficher false
//if right number divisible par deux > afficher true, else afficher == falshe
function dividedByTwo() {
  let variable = 2;
  if (leftNumber % variable === 0) return true;
  else return false;
}
console.log(dividedByTwo(2));

//Je n'arrive pas à ajouter rightNumber dans la condition
