var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();


//Once you do that, invoke inner.

  inner();



//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

var makeCall = callFriend();

console.log(makeCall("435-215-9248"));







//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/

function makeCounter(num) {
  return function(){
    for(var i=1; i<5; i++) {
    console.log(i);
    }
  };
}
  var count = makeCounter();

count();



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value) {
  var inc = function() {
  return value + 1;
  };
  var dec = function() {
    return value - 1;
  };
  return {inc:inc, dec:dec};
}


 counter = counterFactory(10);

console.log(counter.inc());
console.log(counter.dec());




//////////////////PROBLEM 5////////////////////


// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'
function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';
    var message = function() {
      return welcomeText + firstname + " " + lastname;
    };
  return message();
}



 console.log(motivation('Billy', 'Bob'));



//////////////////PROBLEM 6////////////////////

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: 'Utah'
  };

  var privateMethod = function(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  };

  // Anything that is being returned is made public and can be invoked from outside our lexical scope

  return {
    publicMethod: function() {
     return privateMethod();
    }
    };

})();


console.log(module.publicMethod());


//////////////////PROBLEM 7////////////////////

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(newScope(i), i * 1000);
  }

  function newScope(i) {

    return function() {
      console.log(i);
    };
  }
}
timeOutCounter();

//////////////////PROBLEM 8////////////////////

var funcArray = [];

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
