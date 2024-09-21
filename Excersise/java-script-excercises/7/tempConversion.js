const convertToCelsius = function(degreesInFahrenheit) {
  let unroundedSolution = (degreesInFahrenheit-32) * 5/9;
  let roundedSolution = unroundedSolution.toFixed(1);
  if(roundedSolution % 1 == 0){
    return Math.round(roundedSolution);
  }
  return roundedSolution;
};

const convertToFahrenheit = function(degreesInCelsius) {
  let unroundedSolution = (degreesInCelsius * 9/5) + 32;
  let roundedSolution = unroundedSolution.toFixed(1);
  if(roundedSolution % 1 == 0){
    return Math.round(roundedSolution);
  }
  return roundedSolution;
};

//console.log(convertToCelsius(100));
//console.log(convertToFahrenheit(-17.7778));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
