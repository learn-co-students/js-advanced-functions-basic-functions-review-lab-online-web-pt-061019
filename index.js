// Your code here
function saturdayFun(fun = 'roller-skate'){
  return `This Saturday, I want to ${fun}!`;
}


let mondayWork = function(work = "go to the office"){
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(visualFlair="*"){
 return function (adj="special"){
   return `You are ${visualFlair}${adj}${visualFlair}!`;
 }
}

const Calculator = {
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a,b) => a / b
}

function actionApplyer(start, arr){
  if(arr.length === 0){
    return start;
  }else{
    let x = start;
      arr.forEach(fn => x = fn(x))
      return x
  }
}


