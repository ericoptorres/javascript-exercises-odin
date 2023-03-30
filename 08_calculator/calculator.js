const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, element) => total += element, 0)
};

const multiply = function(array) {
  return array.reduce((total, element) => total *= element ,1)
};

const power = function(a, power) {
	let i = 0
  let total = 1
  while (i < power){
    total *= a
    i++
  }
  return total
};

const factorial = function(a) {
	let total = 1
  while (a){
    total *= a
    a--
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
