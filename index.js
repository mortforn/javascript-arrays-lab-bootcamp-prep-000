// Add your functions and code here

const kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens;
} 

function prependKitten(name) {
  var newerKittens = kittens.concat(kittens.splice(0, name));
  return newerKittens;
}

function removeLastKitten() {
  return kittens.slice(0, 2);
 
}

function removeFirstKitten() {
  return kittens.slice(0,2);

}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}