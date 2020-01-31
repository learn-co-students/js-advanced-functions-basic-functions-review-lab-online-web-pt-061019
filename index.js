// Your code here

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight="*") {
  return function(adjective="special") {
    return `You are ${highlight}${adjective}${highlight}!`
  }
}

const Calculator = {
  add: (function(a,b) { return a + b }),
  subtract: (function(a,b) { return a - b }),
  multiply: (function(a,b) { return a * b }),
  divide: (function(a,b) { return a / b })
}

function actionApplyer(startingInt, fnArr) {
  for (const elem of fnArr) {
    startingInt = elem(startingInt)
  }
  return startingInt
}