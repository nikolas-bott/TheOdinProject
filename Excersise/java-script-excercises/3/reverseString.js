const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = [];
    for(let i = splitString.length; i >= 0; i--){
        reverseArray[i] = splitString[splitString.length - i];
    }
    let finalString = reverseArray.join(""); 

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
