const palindromes = function(str) {
    const reg = /[\W_]/g;
    let modStr = str.toLowerCase().replace(reg, '');
    let newStr = modStr.split('').reverse().join('');
    if(newStr === modStr) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
