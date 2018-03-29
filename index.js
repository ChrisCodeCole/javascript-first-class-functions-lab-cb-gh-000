function countdown(secondFunction){
  window.setTimeout(secondFunction, 2000);
}

var doubler;
var tripler;

function createMultiplier(multiplierValue, ){
  return function(doubler,tripler){
    doubler = doubler * 2;
    tripler = tripler * 3;
  }
}
