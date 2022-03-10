const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  const totalSum = numbers.reduce((total, arr) => {
    return total + arr;
  }, 0);
  return totalSum;
};

const multiply = function(num) {
  const totalProd = num.reduce((total, arg) => {
    return total * arg;
  }, 1);
  return totalProd;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	answer = 1;
  if(n === 0 || n === 1) {
    return answer;
  } else {
    for(i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
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
