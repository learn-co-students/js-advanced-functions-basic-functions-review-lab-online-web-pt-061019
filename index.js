// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(parameter="special"){
    return `You are ${flair}${parameter}${flair}!`
  }
}

const Calculator = {
  add: function(a, b){
    return a + b;
  },
  subtract: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  divide: function(a, b){
    return a / b;
  }
}

function actionApplyer(startingI, arrayOfFunctions){
  let integer = startingI
  for (let i = 0; i < arrayOfFunctions.length; i++){
    integer = arrayOfFunctions[i](integer)
  }
  return integer
}
