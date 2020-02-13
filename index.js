function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(word="*"){
  return function(adj="special"){
    return `You are ${word}${adj}${word}!`
  }
};
// wrapAdjective()()

let Calculator = {
  add: function(a, b){
    return a + b
  },
  subtract: function(a, b){
    return a - b 
  },
  multiply: function(a, b){
    return a * b
  },
  divide: function(a, b){
    return a / b
  }
};

function actionApplyer(start, fnArray){
  let a = start
  for (let i = 0; i < fnArray.length; i++ ){
    a = fnArray[i](a)
  }
  return a
};