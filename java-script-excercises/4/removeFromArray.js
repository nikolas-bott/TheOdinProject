const removeFromArray = function(array, numToRemove) {
    for(let i = 0;i <= array.length;i++){
        if(Number(array[i]) == Number(numToRemove)){
            array.splice(i,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
