// Your code here

function saturdayFun(string = "roller-skate") {
  return `This Saturday, I want to ${string}!`
}

saturdayFun();

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {

  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`
    // let encouragingPromptFunction = wrapAdjective("!!!")
  }

}

wrapAdjective("%")("a dedicated programmer")

const Calculator = {
  add: function(a,b) {
    return a + b
    },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }

}

// function actionApplyer(start, array) {
//   let emptyArray = []
//
//   if (array != emptyArray) {
//     return ((start * 2) + 1000) % 7
//   } else {
//     return start
//   }
//
// }

let actionApplyer = function(start, array) {
  // let emptyArray = []
  //   if (array != emptyArray) {
  //     return ((start * 2) + 1000) % 7
  //   } else {
  //     return start
  //   }
  let x = start

  for (let item of array) {
    x = item(x)
  }

  return x
}
