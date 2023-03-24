const convertToCelsius = function(inFahrenheit) {
  tempCelsius = (inFahrenheit * 5 - 160) / 9 
  return Math.round(tempCelsius * 10) / 10
};

const convertToFahrenheit = function(inCelsius) {
  tempFahrenheit = (inCelsius * 9 + 160) / 5 
  return Math.round(tempFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

