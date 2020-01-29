// Your code here

function saturdayFun(activity ="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  };
      
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  };
  
  function wrapAdjective(visualFlair="*") {
      return function(innerParam="special") {
        return `You are ${visualFlair}${innerParam}${visualFlair}!`
      }
    }
    
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
    
  function actionApplyer(startingInteger, arrayFunctions) {
      for(const el of arrayFunctions) {
          startingInteger = el(startingInteger)
      }
      return startingInteger
  }
  