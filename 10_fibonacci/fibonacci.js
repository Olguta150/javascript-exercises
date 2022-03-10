// const fibonacci = function(n) {
//     if(n < 0) {
//         return 'OOPS';
//     } else if(n < 2) {
//         return Number(n);
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = function(n) {
    let arr = [0, 1];
    if(n < 0) {
        return "OOPS";
    }
    for(i = 2; i < n+1; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n];
}

// Do not edit below this line
module.exports = fibonacci;
