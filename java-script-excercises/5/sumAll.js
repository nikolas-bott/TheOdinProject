const sumAll = function(num1,num2) {
    let greaterNumber = num2;;
    let smallerNumber = num1;
    if(num1 > num2){
        greaterNumber = num1;
        smallerNumber = num2;
    }

    let sum = 0;
    for(let i = smallerNumber; i <= greaterNumber; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
