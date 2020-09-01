//                       PART ONE
                      
//                       QUESTION 1

// What is the value of the keyword this in the following example:
// var data = this;
// console.log(data);

//                         SOLUTION

//  The value of this keyword is window object which is a default value when it’s not pointing to any object

                        
 
//                         QUESTION 2

// What does this function output? Why?
// function logThis(){
// return this;
// }
                        
// logThis(); // ?

//                         SOLUTION
// The output is the value of this keyword which is a window object, simply because the function is returning the value of this keyword

                        

//                             QUESTION 3

// What does this function output? Why?
// var instructor = {
// firstName: 'Tim',
// sayHi: function(){
// console.log("Hello! " + this.firstName);
//     }
// }
                            
// instructor.sayHi() // ?


//                             SOLUTION
                
// The output is => Hello! Tim.
// This is because the keyword this refers to the parent object instructor which is used to access the value of  property firstName



//                                 QUESTION 4

// What does this function output? Why?
// var instructor = {
// firstName: 'Tim',
// info: {
//      catOwner: true,
//      boatOwner: true
//     },
// displayInfo: function(){
// console.log("Cat owner? " + this.catOwner);
//         }
// }
                                
// instructor.displayInfo() // ?


//                                 SOLUTION

// The output is => Cat owner? Undefined.
// This is because the keyword this is pointing to unexisting property hence undefined (catOwner is not in the parent object)



//                                 QUESTION 5

// What does this function output? Why?
// var instructor = {
//     firstName: 'Tim',
//     info: {
//         catOwner: true,
//         boatOwner: true,
//         displayLocation: function(){
//             return this.data.location;
//             },
//     data: {
//          location: "Oakland"
//         }
//     },
// }
                                
// instructor.info.displayLocation() // ?
                                
                                
//                                 SOLUTION
                                
// The output is => “Oakland”
// This is because the key word this in the function refers to the object info which points to another object data then location hence the returned value Oakland


//                                 QUESTION 6

// What does this function output? Why?
// var instructor = {
//     firstName: 'Tim',
//          info: {
//                 catOwner: true,
//                 boatOwner: true,
//                 displayLocation: function(){
//                     return this.location;
//                    },
//         data: {
//                location: "Oakland",
//                logLocation: this.displayLocation
//                 }
//             },
//         }
                                
// instructor.info.data.logLocation() // Why might we be getting an error here?


//                                 SOLUTION

// The output is => a TypeError message cannot read property data undefined.
// This is because the displayLocation function returns undefined (this.location is undefined or invalid)





//                                     PART 2

//                                     QUESTION 1

// Call Apply Bind Exercises
// Fix the following code:
// var obj = {
//     fullName: "Harry Potter",
//     person: {
//          sayHi: function(){
//                 return "This person's name is " + this.fullName
//             }
//         }
//     }

//                                     SOLUTION
// obj.person.sayHi.call(obj)
                                
                                
//                                     QUESTION 2

// List two examples of "array-like-objects" that we have seen.

//                                     SOLUTION

// 1.	Arguments and 
// 2.	JQuery



//                                     QUESTION 3

// Functions to write:
// Make the tests pass for the following functions:
// Write a function called sumEvenArguments which takes all of the arguments
// passed to a function and returns the sum of the even ones.

// sumEvenArguments(1,2,3,4) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2
                                    
                                    
//                                     SOLUTION

function sumEvenArguments(){
    var sum =0; 
    for(var i=0;i<arguments.length;i++){
    if(arguments[i] % 2 === 0)
    sum += arguments[i];
        }
    return sum;
    }

sumEvenArguments(1,2,3,4)
sumEvenArguments(1,2,6)
sumEvenArguments(1,4)


//                                             QUESTION 4

// Write a function called arrayFrom which converts an array-like-object into an array.
// function sample(){
// var arr = arrayFrom(arguments)
// if(!arr.reduce) throw "This is not an array!"
//     return arr.reduce(function(acc,next){
//         return acc+next;
//     },0)
// }

//                                             SOLUTION

function arrayFrom(){
return [].slice.call(arguments)
                                               
}
function sample(){
var arr = arrayFrom(arguments)
if(!arr.reduce) throw "This is not an array!"
return arr.reduce(function(acc,next){
return acc+next;
    },0)
}
                                            



//                                                 QUESTION 5

// Write a function called invokeMax which accepts a function and a maximum amount. 
// invokeMax should return a function that when called increments a counter. 
// If the counter is greater than the maximum amount, the inner function should return "Maxed Out!"

// function add(a,b){
// return a+b
// }
                    
// var addOnlyThreeTimes = invokeMax(add,3);
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(2,2) // 4
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(1,2) // "Maxed Out!"


//                                          SOLUTION

function invokeMax(fn, maxAmt){
    let counter = 0;
    return function(a, b){
        counter++;
        if(counter > maxAmt){
            return "Maxed Out!";
        } else {
            return fn(a, b);
        }
    }
}

function add(a,b){
    return a+b
}
var addOnlyThreeTimes = invokeMax(add,3);

addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"


//                                         QUESTION 6

// Write a function called guessingGame which takes in one parameter amount. 
// The function should return another function that takes in a parameter called guess. 
// In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well 
// as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - 
// you should return the string "You got it!". 
// If the guess is too high return "You're too high!" and if it is too low, return "You're too low!". 
// You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
// You will have to make use of closure to solve this problem.

// var game = guessingGame(5)
// game(1) // "You're too low!" 
// game(8) // "You're too high!"
// game(5) // "You're too low!"
// game(7) // "You got it!" 
// game(1) // "You are all done playing!" 

// var game2 = guessingGame(3)
// game2(5) // "You're too low!" 
// game2(3) // "You're too low!"
// game2(1) // "No more guesses the answer was 0" 
// game2(1) // "You are all done playing!"
                                        


                                            // SOLUTION

function guessingGame(amount){
    let answer = Math.floor(Math.random()*10)
    let guesses = 0
    return function(guess){
        if(guess === answer){
            guesses++
            return `You got it!`
        }
        if(guesses === amount) {
            guesses++
            return `No more guesses, the answer was ${answer}`
        }
        if(guesses > amount) {
            return `You are all done playing!`
        }
        else if(guess > answer) {
            guesses++
            return `You're too high!`
        }
        else if(guess < answer) {
            guesses++
            return `You're too low!`
        }
    }
}

var game2 = guessingGame(3)


