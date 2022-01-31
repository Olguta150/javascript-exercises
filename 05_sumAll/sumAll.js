const sumAll = function(a, b) {
    if(a > 0 && b > 0 && typeof a === 'number' && typeof b === 'number'){
    let valorA = a;
    let valorB = b; 
    let sum = 0;
    if(a < b) {
        for(i = valorA; i <= valorB; i++) {
            sum += i;
        }
        return sum;
    } else if(b < a) {
        for(i = valorB; i <= valorA; i++) {
            sum += i;
        }
        return sum;
    }
  } else {
      return "ERROR";
  }
}
sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
