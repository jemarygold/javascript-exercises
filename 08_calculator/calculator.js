const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sumOfArray = 0;
	array.forEach((element) => {sumOfArray += element})
  return sumOfArray;
};

const multiply = function(array) {
  let multipleOfArray = 1;
	array.forEach((element) => {multipleOfArray *= element})
  return multipleOfArray;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let factorial = 1;
	for (var i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;

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
