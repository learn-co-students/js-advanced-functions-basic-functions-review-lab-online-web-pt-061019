// Your code here
function saturdayFun(stm="roller-skate"){
  return(`This Saturday, I want to ${stm}!`)
}

function mondayWork(act="go to the office"){
  return(`This Monday, I will ${act}.`)
}

// Implement a function called wrapAdjective.
// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"B

function wrapAdjective(val="*"){
  // let innerFunction = function(par="special"){
    return function(par="special"){

      return `You are ${val}${par}${val}!`
  }
  // return innerFunction
}

let Calculator = {
  add: function(a,b){ return a + b},
  subtract: function(a,b){ return a - b},
  multiply: function(a,b){ return a*b},
  divide: function(a,b){return a/b}
}

function actionApplyer(i,arr){
  if (arr == "")
    return i
  else
    return (i*2 +1000) % 7
}