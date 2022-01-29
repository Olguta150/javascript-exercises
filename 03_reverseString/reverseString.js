const reverseString = function(string) {
    const splitWord = string.split("");
    const reverseArray = splitWord.reverse();
    const joinArray = reverseArray.join("");

    return joinArray;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
