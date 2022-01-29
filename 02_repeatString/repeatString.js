const repeatString = function(string, time) {
    let repeatedString = '';
    if(time > 0) {
        repeatedString = string.repeat(time);
    } else if(time === 0) {
        repeatedString = '';
    } else {
        repeatedString = 'ERROR';
    }
    return repeatedString;
}

repeatString('hey', -1);

// Do not edit below this line
module.exports = repeatString;