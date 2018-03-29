function countdown(secondFunction){
  window.setTimeout(secondFunction, 2000);
}

function doubler(num){
  num = num * 2;
  return num;
}
function tripler(num){
  num = num * 3;
  return num;
}
function createMultiplier(multiplierValue, number){
    if(multiplierValue == 2){return doubler(number)}
    else{return tripler(number)}
}
