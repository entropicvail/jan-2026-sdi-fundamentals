/*
  Reminder to run this script, navigate into the jan-2026-sdi-fundamentals directory and execute the below command
    node sandbox.js
*/

/*
  You can use this as a sandbox to test any js logic you conceive.
  A Sandbox also is a great place to return to when you want to reference some code you previously tested
*/

// Variables retain different data types
// declare → define → assign
let yay = true // boolean
let nay = false // boolean
let words = 'This is a string' // string
let wholeNumber = 30 // number (sometimes referred to as an integer)
let decimalNumber = 22.5 // number (sometimes referred to as a float)
let negativeNumber = -3 // number (sometimes referred to as an integer, just like the positive whole number)
let intentionallyLackingValue = null // null
let lackingValue // undefined (Notice a value is not given to the variable)

// Math

let sum = 5 + 9
let difference = 11 - 5
let product = 11 * 3
let quotient = 333 / 111
let remainder = 25 % 10
// Note: you can use whole numbers as well as decimal point numbers

// Functions and Methods

function fullName(firstName, lastName) {
  // alternate option
  // let name
  // name = firstName + " " + lastName
  let name = firstName + " " + lastName
  return name
  // note the scope of the variables
      // name, firstName, lastName

  // a second option below
  // return firstName + " " + lastName

  // a third option below
  // return `${firstName} ${lastName}`
}

// Different ways to call a function
fullName("John", "Wick")

let fName = "Marky"
let lName = "Mark"
fullName(fName, lName)

let laName = "Ipkiss"
fullName("Stanley", laName)

// →→→→ Reminder: creating a function does not execute the function or its enclosed logic
    // you much call the function if you want it to do its job.

// →→→→ Reminder: invoking a function does not automatically retain what it returns in a variable
    // meaning the above invocations to trigger the logic to execute, as well as return the expected string
    // but that string is not logged to the console or assigned to a global variable that can be used later
        // alter the 3 lines calling the function to:
            // save one returned string to a variable
            // log one to the console
            // save one returned string to a variable and then log that variable to the console.

// && looks for the first falsy
// console.log(0 && true)
// || looks for the first truthy
// console.log(0 || NaN || undefined )

// == vs ===
// == topically checks if they are the same
// === checks if they are the same, and have the same datatype
let userInput = "6"
// console.log(userInput == "name" )

/*
  Located in the comparing.txt file, there is a deeper dive into == vs ===
*/



/* ---------------------------------------
  FUNDAMENTALS 2
--------------------------------------- */

// console.log(typeof [1,2,3])

// console.log(Array.isArray(1))

// let Array = {
//   isArray: function...
// }

// console.log(!true) // true flips to false

// let amI = false
// if (amI == true){
//   console.log("Jordan is Grounded")
// }


/* →→→→
How to quickly comment a line

Windows → ctrl + /
Mac → cmd + /
*/


/* →→→→ Highlight what you want to change, then hit
Windows → ctrl + d
Mac → cmd + d
*/

// let stuff =  2

// stuff = stuff *3
// stuff += 5 // thing = thing + 5

// console.log(stuff)

// let glob = "Matt Rocks!"
// let dude
// let gettinIT

// function whoRocks(){

  // console.log("glog → "+glob)
  // dude = "Ben is gunna get this"

  // function whatThu(){
    // gettinIT = "on the way"
    // glob="Way inside"
    // console.log("dude → "+dude)
    // console.log("glog → "+glob)
  // }
  // glob = "so strings"
  // whatThu()
  // console.log ("gettinIT → "+gettinIT)
  // console.log(glob)
// }
// console.log("outside → "+ gettinIT)
// function benJamin(){
//   console.log(dude)
// }
// whatThu()
// console.log(dude)
// whoRocks()
// benJamin()


// let globa = "This is still global"

// function lessGlobal(){
  // Reminder: NEVER create a function inside a function
    // It is silly

  // globa = "Functionally Scoped"
  // console.log(globa)

  // function internal(){
  //   globa = "Way inside"
  //   console.log(globa)
  // }

    // let internal = () => {
    //   globa = "Way inside"
    //   console.log(globa)
    // }

//   console.log("I am here → " + globa)
//   internal()
//   globa = "End of the function"
// }

// console.log(globa)
// lessGlobal()
// console.log("Final Console → "+globa)


// →→→→ Want to move a whole line, well for 5.99 you can
// hold alt and use the up or down arrow to move it

