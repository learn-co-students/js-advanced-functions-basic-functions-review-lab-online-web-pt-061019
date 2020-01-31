// hoisting
    // saturdayFun('swim');
function saturdayFun(activity ="roller-skate") {
  return `This Saturday, I want to ${activity}!`
};
    // saturdayFun();

// function expression
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
};

    // mondayWork();
    // mondayWork('just lay in bed');

function wrapAdjective(visualFlair="*") {
    return function(innerParam="special") {
      return `You are ${visualFlair}${innerParam}${visualFlair}!`
    }
  }
  
    // wrapAdjective("%")("a dedicated programmer")
    // let encouragingPromptFunction = wrapAdjective("!!!")
    // encouragingPromptFunction("a dedicated programmer");

// Closure?
// defines an object called Calculator
let Calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
};
    // object in JS: myObject = {key:value}
    // objectName.propertyName
    // myObj.type              = 'Dot syntax';
    // myObj['date created']   = 'String with space';


    // Defines a function called actionApplyer
    // receives two arguments: a starting integer and an array of functions
    //   returns the given starting point, unchanged, when the array is empty:
    //   Given 13, returns 4 after being acted on by several functions:

function actionApplyer(startingInteger, arrayFunctions) {
    for(const el of arrayFunctions) {
        startingInteger = el(startingInteger)
    }
    return startingInteger
}

// for loop: base the loop's condition off of the .length of the array. 
// const actionApplyer = function(startingInteger, arrayFunctions) {
//     let result = startingInteger
//     for(let i = 0; i < arrayFunctions.length; i++) {
//         result = arrayFunctions[i](result)
//     }
//     return result
// }