function countdown(secondFunction){
  window.setTimeout(secondFunction, 2000);
}

function createMultiplier(multiplierValue){
  return function(value){
    return value * multiplierValue;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(multiplierValue, value){
  return function(){
    return multiplierValue * value;
  }
}

var doublerWithBind = multiplier().bind(null, 2, value);
var triplerWithBind = multiplier().bind(null, 3, value);
