// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(flair = "*"){
    return function(status = "special"){
        return `You are ${flair}${status}${flair}!`
    }
}
wrapAdjective()()

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
}

let actionApplyer = function(start, array) {
    let a = start
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
    return a
  }