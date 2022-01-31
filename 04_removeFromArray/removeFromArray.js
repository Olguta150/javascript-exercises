const removeFromArray = function(arr, ...toRemove) {
    let modifiedArray = [...arr];
    for(i = 0; i < arr.length; i++) {
        if(modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1);
        }
    }
    return modifiedArray;
}
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
