// We need to perform an operation only on the even numbers.
// We need to transform those numbers by multiplying them by 3.
// Finally, we need to add the result up from the previous transformation.
function isEven(array){
    return array % 2 == 0;
}
function timesThree(array){
    return array * 3;
}

const arr = [1,2,3,4,5];
const evenNumbers = arr.filter(isEven);
const finalArr = evenNumbers.map(timesThree);
const sum = finalArr.reduce((total, currentItem) =>{
    return total + currentItem;
},0);

console.log(sum);