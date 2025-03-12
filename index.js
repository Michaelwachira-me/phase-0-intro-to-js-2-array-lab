// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// 1. destructivelyAppendCat(cat)
function destructivelyAppendCat(cat) {
  cats.push(cat);
  return cats;
}

// 2. destructivelyPrependCat(cat)
function destructivelyPrependCat(cat) {
  cats.unshift(cat);
  return cats;
}

// 3. appendCat(cat)
function appendCat(cat) {
  return [...cats, cat];
}

// 4. prependCat(cat)
function prependCat(cat) {
  return [cat, ...cats];
}

// 5. destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

// 6. destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

// 7. removeLastCat()
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// 8. removeFirstCat()
function removeFirstCat() {
  return cats.slice(1);
}

// 9. removeCatAtIndex(index)
function removeCatAtIndex(index) {
  return cats.slice(0, index).concat(cats.slice(index + 1));
}