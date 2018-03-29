function countdown(secondFunction){
  window.setTimeout(secondFunction, 2000);
}

function createMultiplier(multiplierValue){
  return function(value){
    value * multiplierValue;
  }
}
var doubler = createMultiplier(2, value);
var tripler = createMultiplier(3, value);
