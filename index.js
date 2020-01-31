// Your code here
/*LAB: Implement a function called saturdayFun.
It should return a String like "This Saturday, I want to ....!" Fill in the ... with
the activity that's passed in as the first parameter. If nothing is passed in,
default to "roller-skate". */

function saturdayFun(arg = "roller-skate") {
  return `This Saturday, I want to ${arg}!`
}

const mondayWork = function(arg = "go to the office") {
  return `This Monday, I will ${arg}.`
}

function wrapAdjective(wrap="*") {
  return function(param="special") {
    return `You are ${wrap}${param}${wrap}!`
  }
}

const Calculator = {
  add: function(a, b) { return a + b },
  subtract: function(a, b) { return a - b },
  multiply: function(a, b) { return a * b },
  divide: function(a, b) { return a / b }
}

function actionApplyer(int, arr) {
  let result = int;
  for (let fn of arr) {
    result = fn(result)
  }
  return result
  // let int1 = arr[0](int);
  // let int2 = arr[1](int1);
  // let int3 = arr[2](int2);
  // return int3
}
